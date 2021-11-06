import "./App.css";
import { useState } from "react";
import content from "./asset/content";
import "bootstrap/dist/css/bootstrap.min.css";
function App() {
  const [lang, setLang] = useState("uz");
  return (
    <>
      <div className="container-fluid bg-info vh-100">
        <h1 className="h1 text-center pt-4">{content[lang].madeBy}</h1>

        <form className="shadow-lg p-3 mt-5 bg-body rounded w-50 mx-auto">
          <select
            className="form-select ms-auto"
            style={{ width: "120px" }}
            onChange={(evt) => setLang(evt.target.value)}
            defaultValue={lang}
          >
            <option value="uz">Uzbek</option>
            <option value="en">English</option>
            <option value="ru">Russian</option>
          </select>
          <label htmlFor="email" className="d-flex flex-column">
            <p className="mb-2">{content[lang].emailLabelStart}</p>
            <input
              id="email"
              className="form-control flex-grow-1"
              type="email"
              placeholder={content[lang].emailPlaceholder}
              autoFocus
              required
            />
            <p className="text-warning">{content[lang].emailLabelEnd}</p>
          </label>
          <label htmlFor="parol" className="mt-2 d-flex flex-column">
            <p className="mb-2">{content[lang].parolLabelStart}</p>
            <input
              id="parol"
              className="form-control flex-grow-1"
              type="password"
              placeholder={content[lang].parolPlaceholder}
              required
            />
            <p className="text-warning">{content[lang].parolLabelEnd}</p>
          </label>
          <label>
            <input className="form-check-input" type="checkbox" />
            <span className="ms-2">{content[lang].remember}</span>
          </label>
          <div>
            <button className="btn btn-primary mt-3 w-50 text-center">
              {content[lang].send}
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default App;
