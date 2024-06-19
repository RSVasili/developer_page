import {dest, src} from "gulp";
import {paths} from "../config/paths.js";

export function resources() {
    return src(paths.src.srcResources, { encoding: false })
        .pipe(dest(paths.build.buildResources));
}
