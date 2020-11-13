import './App.css';
import { CSSTransition } from 'react-transition-group';
import React, { useState } from 'react';
import pizza from './imgs/pizza.png'
import burrito from './imgs/burrito.png'

function App() {
  const [showHome, setShowHome] = useState(true);
  const [showNew, setShowNew] = useState(false);
  const [showEmpty, setShowEmpty] = useState(false);
  const [pizzaCount, setPizzaCount] = useState(4);
  return (
    <div style={{ width: '100vw', height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
      <div style={{ width: 480, height: 800, background: 'lightblue', overflow:'none' }}>
        <div style={{ height: '60px', width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center', background:'cadetblue'}}>
          <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', paddingLeft: 20 }}>
            <img style={{ width: 40, paddingRight: 8 }} src={burrito} />
            <div>
              3
            </div>
          </div>
          <div>
            Pizza Picker!
          </div>
          <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
            <img style={{ width: 40, paddingRight: 8 }} src={pizza} />
            <div style={{ paddingRight: 20}}>
              {pizzaCount}
            </div>
          </div>
        </div>
        {showHome && (
          <div
          style={{ width: '100%', height: 680, display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}
          >
            <div style={{ fontSize: 20, padding: 20 }}>What is Tovi eating for lunch?</div>
            <div
            style={{ cursor: 'pointer' }}
              onClick={() => setShowNew(true)}
            >
              Tell us...
            </div>
          </div>
        )}
        <CSSTransition
          in={showNew}
          timeout={300}
          classNames="new"
          unmountOnExit
          onEnter={() => setShowHome(false)}
          onExited={() => setShowHome(true)}
        >
            <div style={{ width: '100%', height: 680, display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}
            onClick={() => setShowNew(false)}>
              <img src={pizza} style={{width: 200}} />
              <div style={{ fontSize: 20, padding: 30 }}>
                It's Pizza!
              </div>
            </div>
        </CSSTransition>
        <CSSTransition
          in={showEmpty}
          timeout={300}
          classNames="empty"
          unmountOnExit
          onEnter={() => setShowHome(false)}
          onExited={() => setShowHome(true)}
        >
            <div style={{ fontStyle: 'italic', width: '100%', height: 680, display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}
            >            
              <div style={{ fontSize: 18, padding: 10 }}>Tip:</div>
              <div>It's always pizza</div>   
            </div>
        </CSSTransition>
        <div style={{ height: '60px', width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', background:'cadetblue'}}>
          <div style={{ cursor: 'pointer', paddingTop: 10, paddingBottom: 10, textAlign: 'center', width: '50%', borderRight: '1px solid black' }}
            onClick={() => {
              setShowEmpty(false)
              setShowNew(false)
            }}
          >
            Picker
          </div>
          <div style={{ cursor: 'pointer', textAlign: 'center', width: '50%' }}
            onClick={() => {
              if (showHome){
                setShowEmpty(true)}
                setPizzaCount(pizzaCount+1)
              }
            }
          >
            Empty
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
