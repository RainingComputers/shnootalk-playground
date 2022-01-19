![](public/icons/cloud-compile.png)

# ShnooTalk Playground (Svelte Version)

Run and try the [ShnooTalk](https://github.com/RainingComputers/ShnooTalk) language from your browser!

Web code editor for ShnooTalk Cloud Compile based on [shnootalk-ace](https://github.com/RainingComputers/shnootalk-ace/pulse)
(extended [ace](https://github.com/ajaxorg/ace) text editor with ShnooTalk syntax support).

ShnooTalk playground uses the [Shnootalk Cloud Compile](https://github.com/RainingComputers/shnootalk-cloud-compile/) project for backend.

This is rewrite of the original [ShnooTalk Playground](https://github.com/RainingComputers/shnootalk-playground) in svelte 

## Styling conventions

+ All arrangement and background colour should come from box.css classes
+ Inline `<style> or style=` is only allowed for 
    + Adjusting height/width of the component (must come from props)
    + Applying accent color (different from background color that changes depending on dark or light theme, accent color does not)
+ If the class list is more than four/five, make it an array and `.join(" ")` in a `<script context="module">`
