export function rand_color() {
    let r = Math.round(Math.random() * 255);
    let g = Math.round(Math.random() * 255);
    let b = Math.round(Math.random() * 255);
    return `rgb(${r},${g},${b})`
}
export function beautify_numbers(number: number) {
    const list = number.toString().split('').reverse();
    const reducer = (a: string, b: string, i: number) => i % 3 !== 0 || i === 0 ? b + a : b + ` ${a}`;
    return list.reduce(reducer, "");
}

export function pt_cir(rayon:number, angle:number, dx = 0, dy = 0) {
    let x = rayon * Math.cos(deg2rad(angle)) + dx;
    let y = rayon * Math.sin(deg2rad(angle)) + dy;
    return { "p": x.toFixed(2) + " " + y.toFixed(2), x, y };
}
export function deg2rad(deg:number) {
    return deg * Math.PI / 180;
}