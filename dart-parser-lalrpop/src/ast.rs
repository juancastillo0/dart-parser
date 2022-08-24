// pub finalConstVarOrType = {<("late")?> "final" <(dartType)?>, "const" (dartType)? , ("late")? varOrType};
pub struct FinalConstVarOrType {
    pub is_late: bool,
    pub is_const: bool,
    pub is_final: bool,
    pub dart_type: Option<String>,
}

fn m() {
    let d = FinalConstVarOrType {
        is_late: true,
        dart_type: Some("".to_string()),
        is_const: false,
        is_final: true,
    };
}

