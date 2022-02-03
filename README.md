![](ui/public/icons/cloud-compile.png)

# ShnooTalk Playground (Svelte Version)

Run and try the [ShnooTalk](https://github.com/RainingComputers/ShnooTalk) language from your browser!

The UI is written in Svelte. The code editor is based on [shnootalk-ace](https://github.com/RainingComputers/shnootalk-ace/pulse)
(extended [ace](https://github.com/ajaxorg/ace) text editor with ShnooTalk syntax support).

The [backend](server/) is a FastAPI Python app that calls the compiler as a subprocess. You can [deploy](server/kubernetes.yml) the app on kubernetes. 

