import {useEffect, useState, createRef } from 'react'
import Title from './components/Title'
import QuestionsBlock from './components/QuestionsBlock'
import AnswerBlock from "./components/AnswerBlock"

const App = () => {
    const [quiz, setQuiz] = useState({
        "quizId": "x42kew",
        "title": "Which Nicki Minaj are you?",
        "bannerimg": "nicki.jpg",
        "subtitle": "onika burger",
        "content": [
            {
                "id": 0,
                "text": "What's your favorite Nicki song?",
                "questions": {
                    "Starships": {
                        "text": "Starships",
                        "image": "https://pyxis.nymag.com/v1/imgs/d30/38c/f3b01c167cd04ce37394a41056e0054ca3-27-nicki-minaj-10.2x.rsocial.w600.jpg",
                        "alt": "Nicki Minaj - Starships (Explicit)",
                        "credit": "Nicki Minaj",
                        "score": {
                            "rookie": 1,
                            "chun_li": 0,
                            "um_chile": 0,
                            "academic": 0,
                            "onika_burger": 1,
                            "emo_onika": 0,
                            "roman_zolanski": 0,
                            "barbie": 2
                        }
                    },
                    "Your Love": {
                        "text": "Your Love",
                        "image": "https://upload.wikimedia.org/wikipedia/en/thumb/0/01/Your_Love_screencap.jpg/220px-Your_Love_screencap.jpg",
                        "alt": "Nicki Minaj - Your Love (Official Music Video)",
                        "credit": "Nicki Minaj",
                        "score": {
                            "rookie": 2,
                            "chun_li": 1,
                            "um_chile": 0,
                            "academic": 0,
                            "onika_burger": 0,
                            "emo_onika": 1,
                            "roman_zolanski": 0,
                            "barbie": 0
                        }
                    },
                    "Grand Piano": {
                        "text": "Grand Piano",
                        "image": "https://naijagbedu.files.wordpress.com/2015/01/nicki.jpg",
                        "alt": "Nicki Minaj - YMCMB & Beats By Dre Presents: The Pinkprint Movie",
                        "credit": "Nicki Minaj",
                        "score": {
                            "rookie": 0,
                            "chun_li": 0,
                            "um_chile": 0,
                            "academic": 0,
                            "onika_burger": 0,
                            "emo_onika": 3,
                            "roman_zolanski": 0,
                            "barbie": 1
                        }
                    },
                    "Monster": {
                        "text": "Monster",
                        "image": "https://i.ytimg.com/vi/PFlYpVudqDo/maxresdefault.jpg",
                        "alt": "Nicki Minaj in Kanye's West's Monster",
                        "credit": "Kanye West",
                        "score": {
                            "rookie": 0,
                            "chun_li": 1,
                            "um_chile": 0,
                            "academic": 0,
                            "onika_burger": 2,
                            "emo_onika": -1,
                            "roman_zolanski": 3,
                            "barbie": 1
                        }
                    }
                }
            },
            {
                "id": 1,
                "text": "What's your favorite Nicki Moment?",
                "questions": {
                    "barbz stay in school": {
                        "text": "barbz stay in school",
                        "image": "https://i0.wp.com/images.onwardstate.com/uploads/2021/09/Screen-Shot-2021-09-07-at-6.43.53-PM.png?fit=1192%2C886&ssl=1",
                        "alt": "Nicki at School",
                        "credit": "PSUBarbz",
                        "score": {
                            "rookie": 0,
                            "chun_li": 0,
                            "um_chile": 0,
                            "academic": 4,
                            "onika_burger": 0,
                            "emo_onika": 0,
                            "roman_zolanski": 0,
                            "barbie": 0
                        }
                    },
                    "american idol": {
                        "text": "american idol",
                        "image": "https://i.dailymail.co.uk/i/pix/2013/01/17/article-2263760-16FD2C35000005DC-181_634x441.jpg",
                        "alt": "nicki American Idol",
                        "credit": "Daily Mail UK",
                        "score": {
                            "rookie": 0,
                            "chun_li": 0,
                            "um_chile": 0,
                            "academic": 0,
                            "onika_burg": 0,
                            "emo_onika": 0,
                            "roman_zolanski": 3,
                            "barbie": 1
                        }
                    },
                    "2015 VMAs": {
                        "text": "2015 VMAs",
                        "image": "https://i.ytimg.com/vi/CQHTKGAGBtU/maxresdefault.jpg",
                        "alt": "Pasta in tomato sauce",
                        "credit": "Mgg Vitchakorn",
                        "score": {
                            "rookie": 0,
                            "chun_li": 1,
                            "um_chile": 0,
                            "academic": 0,
                            "onika_burger": 2,
                            "emo_onika": -1,
                            "roman_zolanski": 3,
                            "barbie": 0
                        }
                    },
                    "2012 Grammys": {
                        "text": "2012 Grammys",
                        "image": "https://metro.co.uk/wp-content/uploads/2014/03/wpid-article-1329126444853-11b4fff0000005dc-88172_466x358.jpg?quality=90&strip=all&zoom=1&resize=466%2C358",
                        "alt": "Rapper Nicki Minaj arrives at the 54th Annual Grammy Awards with a man dressed as the Pope",
                        "credit": "Getty Images",
                        "score": {
                            "rookie": 0,
                            "chun_li": 1,
                            "um_chile": 0,
                            "academic": 0,
                            "onika_burger": 2,
                            "emo_onika": 1,
                            "roman_zolanski": 0,
                            "barbie": 0
                        }
                    }
                }
            },
            {
                "id": 2,
                "text": "Which Hogwarts House do you belong in?",
                "questions": {
                    "Gryffindor": {
                        "text": "Gryffindor",
                        "image": "https://fictionhorizon.com/wp-content/uploads/2020/07/Harry-Ron-Hermione-1.jpg",
                        "alt": "focus photography of building windows",
                        "credit": "Fiction Horizon",
                        "score": {
                            "rookie": 1,
                            "chun_li": 4,
                            "um_chile": 0,
                            "academic": 0,
                            "onika_burger": 1,
                            "emo_onika": 0,
                            "roman_zolanski": 2,
                            "barbie": 1
                        }
                    },
                    "Hufflepuff": {
                        "text": "Hufflepuff",
                        "image": "https://medias.spotern.com/spots/w1280/242/242657-1571758036.webp",
                        "alt": "Cedric",
                        "credit": "Harry Potter Film Series",
                        "score": {
                            "rookie": 3,
                            "chun_li": 0,
                            "um_chile": 0,
                            "academic": 0,
                            "onika_burger": 0,
                            "emo_onika": 1,
                            "roman_zolanski": -1,
                            "barbie": 0
                        }
                    },
                    "Ravenclaw": {
                        "text": "Ravenclaw",
                        "image": "https://www.looper.com/img/gallery/professor-mcgonagalls-entire-backstory-explained/intro-1582830670.jpg",
                        "alt": "trees beside white house",
                        "credit": "Looper",
                        "score": {
                            "rookie": 0,
                            "chun_li": 0,
                            "um_chile": 2,
                            "academic": 4,
                            "onika_burger": 0,
                            "emo_onika": 0,
                            "roman_zolanski": 0,
                            "barbie": 1
                        }
                    },
                    "Slytherin": {
                        "text": "Slytherin",
                        "image": "https://i.insider.com/632c674a48c188001815cf17?width=1200&format=jpeg",
                        "alt": "malfoy",
                        "credit": "Insider",
                        "score": {
                            "rookie": 0,
                            "chun_li": 2,
                            "um_chile": 1,
                            "academic": 3,
                            "onika_burger": 4,
                            "emo_onika": -1,
                            "roman_zolanski": 4,
                            "barbie": 0
                        }
                    }
                }
            },
            {
                "id": 3,
                "text": "What's your personality like?",
                "questions": {
                    "Assertive": {
                        "text": "Assertive",
                        "image": "https://thefader-res.cloudinary.com/private_images/c_limit,w_1024/c_crop,h_533,w_1024,x_0,y_60,f_auto,q_auto:eco/GettyImages-451483130_hylgfh/GettyImages-451483130_hylgfh.jpg",
                        "alt": "Assertive Nicki",
                        "credit": "Getty Images",
                        "score": {
                            "rookie": 0,
                            "chun_li": 2,
                            "um_chile": 2,
                            "academic": 1,
                            "onika_burger": 3,
                            "emo_onika": -2,
                            "roman_zolanski": 3,
                            "barbie": 0
                        }
                    },
                    "Empathetic": {
                        "text": "Empathetic",
                        "image": "https://i2-prod.mirror.co.uk/incoming/article5448085.ece/ALTERNATES/s1200d/Nicki-Minaj-consoles-young-fan-on-stage-main.jpg",
                        "alt": "Empathetic Nicki",
                        "credit": "The Mirror UK",
                        "score": {
                            "rookie": -1,
                            "chun_li": -2,
                            "um_chile": 0,
                            "academic": 1,
                            "onika_burger": -1,
                            "emo_onika": 3,
                            "roman_zolanski": -2,
                            "barbie": -1
                        }
                    },
                    "Ambitious": {
                        "text": "Ambitious",
                        "image": "https://www.hollywoodreporter.com/wp-content/uploads/2019/02/nicki_minaj_.jpg",
                        "alt": "Ambitious Nicki",
                        "credit": "Hollywood Reporter",
                        "score": {
                            "rookie": 2,
                            "chun_li": 4,
                            "um_chile": 0,
                            "academic": 4,
                            "onika_burger": 4,
                            "emo_onika": 1,
                            "roman_zolanski": 4,
                            "barbie": 4
                        }
                    },
                    "Eccentric": {
                        "text": "Eccentric",
                        "image": "https://d.ibtimes.com/en/full/685262/nicki-minaj.jpg?w=1600&h=900&q=88&f=fcb361688d129ab7f6ec4f1158cebb27",
                        "alt": "Eccentric Nicki",
                        "credit": "IB Times",
                        "score": {
                            "rookie": 0,
                            "chun_li": 2,
                            "um_chile": 1,
                            "academic": -1,
                            "onika_burger": 3,
                            "emo_onika": 0,
                            "roman_zolanski": 4,
                            "barbie": 3
                        }
                    }
                }
            }
        ],
        "answers": {
            "rookie": {
                "personality": "rookie",
                "text": "Rookie Nicki",
                "image": "https://media.tenor.com/BG2vB2FZIKEAAAAd/young-money-nicki-minaj.gif",
                "alt": "Rookie Nicki Minaj",
                "explanation": "But my features and my shows ten times your pay?"
            },
            "chun_li": {
                "personality": "chun_li",
                "text": "Chun Li Nicki",
                "image": "https://media.tenor.com/UY4tKYfgTuMAAAAC/nicki-minaj-chun-li.gif",
                "alt": "Chun Li Era Nicki Minaj",
                "explanation": "They need rappers like me.... They need rappers like me!!!"
            },
            "um_chile": {
                "personality": "um_chile",
                "text": "um chile, anyways Nicki",
                "image": "https://gifdb.com/images/high/nicki-minaj-funny-side-gaze-gsoet920frx257b8.gif",
                "alt": "Um Chile, Anyways Nicki Minaj",
                "explanation": "big boobs?"
            },
            "academic": {
                "personality": "academic",
                "text": "Academic Weapon Nicki",
                "image": "https://i.pinimg.com/originals/ae/20/d9/ae20d9b48e6bcc5a5082a667b26ff504.gif",
                "alt": "Academic Weapon Nicki Minaj",
                "explanation": "Nicki loves school and so do you!"
            },
            "onika_burger": {
                "personality": "onika_burger",
                "text": "Onika Burger",
                "image": "https://media.tenor.com/ReSAXbj6F90AAAAM/nicki-minaj-nicki-eating.gif",
                "alt": "Onika Burger Nicki Minaj",
                "explanation": "<onika burger>"
            },
            "emo_onika": {
                "personality": "emo_onika",
                "text": "Emo Onika",
                "image": "https://media.tenor.com/FxPkZf8uQMMAAAAM/nicki-minaj-sad.gif",
                "alt": "Emo Onika Nicki Minaj",
                "explanation": "You are kind, loving and empathetic."
            },
            "roman_zolanski": {
                "personality": "roman_zolanski",
                "text": "Roman Zolanski",
                "image": "https://media.tenor.com/UJ5nXHT9kmUAAAAd/marajtwt-nicki.gif",
                "alt": "Roman Zolanski Nicki Minaj",
                "explanation": "U r gay and camp."
            },
            "barbie": {
                "personality": "barbie",
                "text": "Barbie Nicki",
                "image": "https://gifdb.com/images/high/nicki-minaj-short-pink-curls-r7m3il2slx58ogla.gif",
                "alt": "Barbie Nicki Minaj",
                "explanation": "A r da Harajuku Barbie Presidentduane."
            }
        }
    })
    const [chosenAnswerItems, setChosenAnswerItems] = useState(new Array(4).fill(null))
    const [unansweredQuestionIds, setUnansweredQuestionIds] = useState(null)
    const [showAnswer, setShowAnswer] = useState(false)

    const refs = unansweredQuestionIds?.reduce((acc, id) => {
        acc[id] = createRef()
        return acc
    }, {})

    const answerRef = createRef()

    // console.log(refs,'ref')
    // console.log(chosenAnswerItems,'answer')

    // const fetchData = async () => {
    //     try {
    //         const response = await fetch('http://localhost:8000/quiz')
    //         const json = await response.json()
    //         console.log(json)
    //         setQuiz(json)
    //     } catch (err) {
    //         console.log(err)
    //     }
    // }

    // useEffect(() => {
    //     fetchData()
    // }, [])

    useEffect(() => {
        const unansweredIds = quiz?.content?.map(({id}) => id)
        setUnansweredQuestionIds(unansweredIds)
    }, [quiz])

    useEffect(() => {
        if (chosenAnswerItems.some((item => item !== null))){
            if (showAnswer) {
                // scroll to answer block
                answerRef.current.scrollIntoView({behavior: 'smooth'})
            }
            if (unansweredQuestionIds.length <= 0 && chosenAnswerItems.some((item => item !== null))) { // 
                setShowAnswer(true)
            } else {
                // scroll to highest unansweredQuestionId
                const highestId = Math.min(...unansweredQuestionIds)
                refs[highestId].current.scrollIntoView({behavior: 'smooth'})
            }
        }
    }, [unansweredQuestionIds, showAnswer, chosenAnswerItems, answerRef, refs])

    return (
        <div className="app">
            <Title title={quiz?.title} subtitle={quiz?.subtitle} banner = {quiz?.bannerimg}/>
            {refs && quiz?.content?.map(contentItem => (
                <QuestionsBlock
                    key={contentItem.id}
                    quizItem={contentItem}
                    setChosenAnswerItems={setChosenAnswerItems}
                    chosenAnswerItems={chosenAnswerItems}
                    unansweredQuestionIds={unansweredQuestionIds}
                    setUnansweredQuestionIds={setUnansweredQuestionIds}
                    ref={refs[contentItem.id]}
                />
            ))}
            {showAnswer && (
                <AnswerBlock
                    answerOptions={quiz?.content}
                    chosenAnswers={chosenAnswerItems}
                    nicki = {quiz?.answers}
                    ref={answerRef}
                />
            )}
            <p> made with love: D&H</p>
        </div>
    )
}

export default App
