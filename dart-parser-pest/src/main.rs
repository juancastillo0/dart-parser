use std::collections::HashMap;

use dart_parser_pest::parse_to_json_pretty;

use std::{fs, io, path};

fn main() -> Result<(), io::Error> {
    let args: Vec<String> = std::env::args().collect();
    if args.len() < 3 {
        return Err(io::Error::new(
            std::io::ErrorKind::Other,
            "Should pass \"input_path\" and \"output-path\" as arguments.",
        ));
    }

    let input_dir = &args[1];
    let output_dir = &args[2];

    let mut map = HashMap::new();

    if fs::metadata(input_dir)?.is_dir() {
        // let dir = std::fs::read_dir(&input_dir)?;
        assert!(fs::metadata(output_dir)?.is_dir());

        visit_dirs(&input_dir, &mut |value: &fs::DirEntry| {
            let path = value.path();
            let path = path.to_str().unwrap();
            if path.ends_with(".dart") {
                let filename = value.file_name();
                let output = format!(
                    "{}{}.json",
                    path.replacen(input_dir, output_dir, 1),
                    &filename.to_str().unwrap().strip_suffix(".dart").unwrap()
                );
                map.insert(path.to_string(), output);
            }
        })?;
    } else {
        assert!(fs::metadata(input_dir)?.is_file());
        assert!(input_dir.ends_with(".dart"));
        let output = path::Path::new(output_dir);
        assert!(!output.exists() || output.is_file());
        map.insert(input_dir.to_string(), output_dir.to_string());
    }

    for (input_path, output_path) in map {
        let content = fs::read(input_path)?;
        let content_string = String::from_utf8(content).unwrap();

        let output_json = parse_to_json_pretty(&content_string);
        fs::write(output_path, output_json)?
    }

    Ok(())
}

// one possible implementation of walking a directory only visiting files
fn visit_dirs(dir: &str, cb: &mut dyn FnMut(&fs::DirEntry)) -> io::Result<()> {
    for entry in fs::read_dir(dir)? {
        let entry = entry?;
        let path = entry.path();
        if path.is_dir() {
            visit_dirs(path.to_str().unwrap(), cb)?;
        } else {
            cb(&entry);
        }
    }
    Ok(())
}
