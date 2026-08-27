
type Mods = Record<string, boolean | boolean>;

 export function classNames (cls:string, mods: Mods = {}, additional:string[] = []):string {
 return [
     cls,
     ...additional.filter(Boolean),
     ...Object.entries(mods)
         .filter((entry) => Boolean(entry[1]))
         .map(([cls]) => cls)
 ]
     .join(' ')
}