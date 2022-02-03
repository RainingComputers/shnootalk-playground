![](ui/public/icons/cloud-compile.png)

# ShnooTalk Playground (Svelte Version)

Run and try the [ShnooTalk](https://github.com/RainingComputers/ShnooTalk) language from your browser!

The UI is written in Svelte. The code editor is based on [shnootalk-ace](https://github.com/RainingComputers/shnootalk-ace/pulse)
(extended [ace](https://github.com/ajaxorg/ace) text editor with ShnooTalk syntax support).

The [backend](server/) is a FastAPI Python app that calls the compiler as a subprocess. You can [deploy](server/kubernetes.yml) the app on kubernetes. 


## Running on local for development

- Start the server

  ```
  cd server
  PIPENV_VENV_IN_PROJECT=true pipenv shell
  pipenv install --dev
  make rundev
  ```

- Make test curl request
 
  *Request*
  ```
  ❯ curl --header "Content-Type: application/json" \
    --request POST \
    --data '{"main.shtk": "fn main() -> int { println(\"Hello world\") return 0 }"}' \
    http://127.0.0.1:8000/shnootalk-playground/api/v2/compile
  
  ```
  *Response*
  ```
  {"result":"SUCCESS","output":"Hello world\n"}
  ```

- Configure UI server URL
    - change `SERVER_URL` [here](ui/src/api/cloudCompile.ts) to `http://127.0.0.1:8000/shnootalk-playground/api/v2/compile`

- Run UI
  ```
  cd ui
  npm run dev
  ```
