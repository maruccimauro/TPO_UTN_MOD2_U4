

export function ResolveStyle(defaultStyle,styles){
    return (defaultStyle + " " +  (styles ? styles.join(" ") : ""));
}