import Score from "./component/Score";
import NewGame from "./component/NewGame";
import Colors from "./component/Colors";
import { GuessProvider } from "./context/GuessContext";
import Mainpage from "./component/Mainpage";
import { useState } from "react";
import RulesPopup from "./component/Rulepopup";
import ButtonPanel from "./component/Buttonpanel";
import Back from "./component/Back";

function App() {
  const [page, setPage] = useState(false);
  function handlemove() {
    setPage((move) => !move);
  }
  return (
    <GuessProvider>
      {!page ? (
        <div className="Apage">
          <Mainpage />
          <ButtonPanel onhandlemove={handlemove} />
          <RulesPopup />
        </div>
      ) : (
        <div className="Amini">
          <div className="Aapp">
            <Back onhandlemove={handlemove} />
            <div className="Aspace">
              <Score />
              <NewGame />
            </div>
            <Colors />
          </div>
        </div>
      )}
    </GuessProvider>
  );
}

export default App;
