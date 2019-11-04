console.log("App.js is working");

const app = {
  title: "Indecision App",
  subtitle: "Put your app in the hands of the computer",
  options: []
};

const onFormSubmit = e => {
  e.preventDefault();

  const option = e.target.elements.option.value;

  if (option) {
    app.options.push(option);
    e.target.elements.option.value = "";
    render();
  }
};

const onMakeDecision = _ => {
  const randomNum = Math.floor(Math.random() * app.options.length);
  const option = app.options[randomNum];
}

const onRemoveAll = () => {
  app.options = [];
  render();
}

const render = () => {
  const template = (
    <div>
      <h1>{app.title}</h1>
      {app.subtitle && <p>{app.subtitle}</p>}
      <p>{app.options.length > 0 ? "Here are your options" : "No options"}</p>
      <button disabled={app.options.length === 0} onClick={onMakeDecision}>What should I do?</button>
      <button onClick={onRemoveAll}>Remove all</button>

      <ol>
        {app.options.map(option => <li>{option}</li>)}
      </ol>
      <form onSubmit={onFormSubmit}>
        <input type="text" name="option" />
        <button>Add Option</button>
      </form>
    </div>
  );

  ReactDOM.render(template, appRoot);
};

const appRoot = document.getElementById("app"); 

render();