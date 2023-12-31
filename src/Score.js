import React, { useState } from 'react';

export default function Score(props) {
  const { scoresPlayerOne, scoresPlayerTwo, isOnePairConfirmedPlayerOne, isOnePairConfirmedPlayerTwo, setIsOnePairConfirmedPlayerOne, setIsOnePairConfirmedPlayerTwo, setIsTwoPairsConfirmedPlayerOne, isTwoPairsConfirmedPlayerOne, isTripleConfirmedPlayerOne, setIsTripleConfirmedPlayerOne, isStraightFlushConfirmedPlayerOne, setIsStraightFlushConfirmedPlayerOne, isRoyalFlushConfirmedPlayerOne, setIsRoyalFlushConfirmedPlayerOne,isFullHouseConfirmedPlayerOne, setIsFullHouseConfirmedPlayerOne, isQuadsConfirmedPlayerOne, setIsQuadsConfirmedPlayerOne, isPokerConfirmedPlayerOne, setIsPokerConfirmedPlayerOne } = props;
  const [lockedStates, setLockedStates] = useState({
    onePairPlayerOne: { locked: false, value: null },
    twoPairsPlayerOne: { locked: false, value: null },
    triplePlayerOne: { locked: false, value: null },
    straightFlushPlayerOne: { locked: false, value: null },
    royalFlushPlayerOne: { locked: false, value: null },
    fullHousePlayerOne: { locked: false, value: null },
    quadsPlayerOne: { locked: false, value: null },
    pokerPlayerOne: { locked: false, value: null },
    onePairPlayerTwo: { locked: false, value: null },
  });

  const handleLock = (key) => {
    setLockedStates((prevLockedStates) => ({
      ...prevLockedStates,
      [key]: { ...prevLockedStates[key], locked: true, value: scoresPlayerOne[key] },
    }));

    // If the locked key is 'onePair', set isOnePairConfirmed to true
    if (key === 'onePairPlayerOne') {
      setIsOnePairConfirmedPlayerOne(true);
    }
    if(key === 'twoPairsPlayerOne') {
      setIsTwoPairsConfirmedPlayerOne(true)
    }
    if(key === 'triplePlayerOne') {
      setIsTripleConfirmedPlayerOne(true)
    }
    if(key ==='straightFlushPlayerOne'){
      setIsStraightFlushConfirmedPlayerOne(true)
    }
    if(key ==='royalFlushPlayerOne'){
      setIsRoyalFlushConfirmedPlayerOne(true)
    }
    if(key ==='fullHousePlayerOne'){
      setIsFullHouseConfirmedPlayerOne(true)
    }
    if(key ==='quadsPlayerOne'){
      setIsQuadsConfirmedPlayerOne(true)
    }
    if(key ==='pokerPlayerOne'){
      setIsPokerConfirmedPlayerOne(true)
    }
    if (key === 'onePairPlayerTwo') {
      setIsOnePairConfirmedPlayerTwo(true);
    }
  };

  // function switchPlayer() {
  //   setCurrentPlayer((prevPlayer) => (prevPlayer === 1 ? 2 : 1)); 
  // }

  // const sumLockedValues = () => {
  //   return Object.values(lockedStates).reduce(
  //     (acc, { value }) => (value !== null ? acc + value : acc),
  //     0
  //   );
  // };

  const handleConfirmButtonClick = (key) => {
    // Lock the score
    handleLock(key);
    // switchPlayer()
    console.log(lockedStates)
  };
  console.log(scoresPlayerOne)
  return (
    <main className='scores'>
      <section className='player-score'>
            <div className="school-playerone">
              {Object.keys(scoresPlayerOne)
                .filter(
                  (key) =>
                    ![
                      'onePairPlayerOne',
                      'twoPairsPlayerOne',
                      'triplePlayerOne',
                      'straightFlushPlayerOne',
                      'royalFlushPlayerOne',
                      'quadsPlayerOne',
                      'pokerPlayerOne',
                      'fullHousePlayerOne',
                    ].includes(key)
                )
                .map((key, index) => (
                  <div className="die-school-container" key={key}>
                    <div className={`school-${key.toLowerCase()}`}>
                      {lockedStates[key]?.locked
                        ? `${index + 1}: ${lockedStates[key].value}`
                        : `${index + 1}: ${scoresPlayerOne[key]}`}
                      <button
                        className={`confirm-${key.toLowerCase()}`}
                        id={`button-${key.toLowerCase()}`}
                        onClick={() => handleConfirmButtonClick(key)}
                        disabled={lockedStates[key]?.locked || scoresPlayerOne[key] === '---'}
                      >
                        {lockedStates[key]?.locked ? <>&#x2714;</> : 'Pick'}
                      </button>
                    </div>
                  </div>
                ))}
              {/* <div className="school-score-container">
                <div className="school-score">{sumLockedValues()}</div>
              </div> */}
            </div>
            <div className="school-playerone">
              {Object.keys(scoresPlayerTwo)
                .filter(
                  (key) =>
                    ![
                      'onePairPlayerTwo'
                    ].includes(key)
                )
                .map((key, index) => (
                  <div className="die-school-container" key={key}>
                    <div className={`school-${key.toLowerCase()}`}>
                      {lockedStates[key]?.locked
                        ? `${index + 1}: ${lockedStates[key].value}`
                        : `${index + 1}: ${scoresPlayerTwo[key]}`}
                      <button
                        className={`confirm-${key.toLowerCase()}`}
                        id={`button-${key.toLowerCase()}`}
                        onClick={() => handleConfirmButtonClick(key)}
                        disabled={lockedStates[key]?.locked || scoresPlayerTwo[key] === '---'}
                      >
                        {lockedStates[key]?.locked ? <>&#x2714;</> : 'Pick'}
                      </button>
                    </div>
                  </div>
                ))}
              {/* <div className="school-score-container">
                <div className="school-score">{sumLockedValues()}</div>
              </div> */}
            </div>
           
            <div className="world">
              <div className="one-pair-container">
                <p className="onep">1P</p>
                <div className="one-pair-playerone">
                  {/* Use isOnePairConfirmed to conditionally render the value */}
                  {isOnePairConfirmedPlayerOne
                    ? `${lockedStates.onePairPlayerOne.value} (Confirmed)`
                    : scoresPlayerOne.onePairPlayerOne}
                </div>
                <button
                  className="confirm-one-pair"
                  id="button-one-pair"
                  onClick={() => handleConfirmButtonClick('onePairPlayerOne')}
                  disabled={
                    lockedStates['onePairPlayerOne']?.locked || scoresPlayerOne.onePairPlayerOne === '---'
                  }
                >
                  {lockedStates['onePairPlayerOne']?.locked ? <>&#x2714;</> : 'Pick'}
                </button>
                <div className="one-pair-playertwo">
                  {/* Use isOnePairConfirmed to conditionally render the value */}
                  {isOnePairConfirmedPlayerTwo
                    ? `${lockedStates.onePairPlayerTwo.value} (Confirmed)`
                    : scoresPlayerTwo.onePairPlayerTwo}
                </div>
                <button
                  className="confirm-one-pair"
                  id="button-one-pair"
                  onClick={() => handleConfirmButtonClick('onePairPlayerTwo')}
                  disabled={
                    lockedStates['onePairPlayerTwo']?.locked || scoresPlayerTwo.onePairPlayerTwo === '---'
                  }
                >
                  {lockedStates['onePairPlayerTwo']?.locked ? <>&#x2714;</> : 'Pick'}
                </button>
              </div>
              <div className="two-pairs-container">
                <p className="twop">2P</p>
                <div className="two-pairs">
                  {isTwoPairsConfirmedPlayerOne
                    ? `${lockedStates.twoPairsPlayerOne.value} (Confirmed)`
                    : scoresPlayerOne.twoPairsPlayerOne}
                </div>
                <button
                  className="confirm-two-pairs"
                  id="button-two-pairs"
                  onClick={() => handleConfirmButtonClick('twoPairsPlayerOne')}
                  disabled={
                    lockedStates['twoPairsPlayerOne']?.locked || scoresPlayerOne.twoPairsPlayerOne === '---'
                  }
                >
                  {lockedStates['twoPairsPlayerOne']?.locked ? <>&#x2714;</> : 'Pick'}
                </button>
              </div>
              
              <div className="triple-containerr">
              <p className="triplep">T</p>
                <div className="triple">
                  {isTripleConfirmedPlayerOne ? `${lockedStates.triplePlayerOne.value}` : scoresPlayerOne.triplePlayerOne}
                </div>
                  <button
                    className="confirm-triple"
                    id="button-triple"
                    onClick={() => handleConfirmButtonClick('triplePlayerOne')}
                    disabled={lockedStates['triplePlayerOne']?.locked || scoresPlayerOne.triplePlayerOne === '---'}
                  >
                    {lockedStates['triplePlayerOne']?.locked ? <>&#x2714;</> : 'Pick'}
                  </button>
              </div>
              <div className="straight-flush-container">
              <p className="straight-flushp">SF</p>
                <div className="straight-flush">{isStraightFlushConfirmedPlayerOne ? `${lockedStates.straightFlushPlayerOne.value}` : scoresPlayerOne.straightFlushPlayerOne}</div>
                  <button 
                    className="confirm-straight-flush"
                    id="button-straight-flush"
                    onClick={() => handleConfirmButtonClick('straightFlushPlayerOne')}
                    disabled={lockedStates['straightFlushPlayerOne']?.locked || scoresPlayerOne.straightFlushPlayerOne === '---'}
                  >
                    {lockedStates['straightFlushPlayerOne']?.locked ? <>&#x2714;</> : 'Pick'}
                  </button>
              </div>
              </div>
              <div className="royal-flush-container">
                <p className="straight-flushp">RF</p>
                  <div className="royal-flush">{isRoyalFlushConfirmedPlayerOne ? `${lockedStates.royalFlushPlayerOne.value}` : scoresPlayerOne.royalFlushPlayerOne}</div>
                  <button 
                  className="confirm-royal-flush"
                    id="button-royal-flush"
                    onClick={() => handleConfirmButtonClick('royalFlushPlayerOne')}
                    disabled={lockedStates['royalFlushPlayerOne']?.locked || scoresPlayerOne.royalFlushPlayerOne === '---'}
                  >
                    {lockedStates['royalFlushPlayerOne']?.locked ? <>&#x2714;</> : 'Pick'}
                  </button>
              </div> 
              <div className='full-house-container'>
              <p className="full-housep">FH</p>
                  <div className="full-house">{isFullHouseConfirmedPlayerOne ? `${lockedStates.fullHousePlayerOne.value}` : scoresPlayerOne.fullHousePlayerOne}</div>
                  <button 
                  className="confirm-full-house"
                    id="button-full-house"
                    onClick={() => handleConfirmButtonClick('fullHousePlayerOne')}
                    disabled={lockedStates['fullHousePlayerOne']?.locked || scoresPlayerOne.fullHousePlayerOne === '---'}
                  >
                    {lockedStates['fullHousePlayerOne']?.locked ? <>&#x2714;</> : 'Pick'}
                  </button>
              </div>  
              <div className='quads-container'>
              <p className="quadsp">Q</p>
                  <div className="quads">{isQuadsConfirmedPlayerOne ? `${lockedStates.quadsPlayerOne.value}` : scoresPlayerOne.quadsPlayerOne}</div>
                  <button 
                  className="confirm-quads"
                    id="button-quads"
                    onClick={() => handleConfirmButtonClick('quadsPlayerOne')}
                    disabled={lockedStates['quadsPlayerOne']?.locked || scoresPlayerOne.quadsPlayerOne === '---'}
                  >
                    {lockedStates['quadsPlayerOne']?.locked ? <>&#x2714;</> : 'Pick'}
                  </button>
              </div> 
              <div className='poker-container'>
              <p className="pokerp">P</p>
                  <div className="poker">{isPokerConfirmedPlayerOne ? `${lockedStates.pokerPlayerOne.value}` : scoresPlayerOne.pokerPlayerOne}</div>
                  <button 
                  className="confirm-poker"
                    id="button-poker"
                    onClick={() => handleConfirmButtonClick('pokerPlayerOne')}
                    disabled={lockedStates['pokerPlayerOne']?.locked || scoresPlayerOne.poker === '---'}
                  >
                    {lockedStates['pokerPlayerOne']?.locked ? <>&#x2714;</> : 'Pick'}
                  </button>
              </div>       
          </section>
    </main>
   
  );
}