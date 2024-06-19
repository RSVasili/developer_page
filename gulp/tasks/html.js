import {dest, src} from "gulp";
import {paths} from "../config/paths.js";
import plumber from "gulp-plumber";
import notify from "gulp-notify";
import browserSync from "browser-sync";

export function html() {
    return src(paths.src.srcHtml)
        .pipe(plumber(
            notify.onError({
                title: "HTML",
                message: "Error: <%= error.message %>"
            })
        ))
        .pipe(dest(paths.build.buildHtml))
        .pipe(browserSync.stream());
}
