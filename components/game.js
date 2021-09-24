import React, { Component } from 'react'
import { TouchableOpacity, Text, View, Button, Image, ImageBackground, Alert } from 'react-native'


class Game extends Component {

    constructor() {
        super();
        this.state = {
            diceIndex: 0,
            activePlayer: 0,
            roundScore: 0,
            scores: [0, 0]
        }
    }

    imageURL = [
        require('./images/dice-1.png'),
        require('./images/dice-2.png'),
        require('./images/dice-3.png'),
        require('./images/dice-4.png'),
        require('./images/dice-5.png'),
        require('./images/dice-6.png')
    ]

    Newgame = () => {
        this.setState({
            diceIndex: 0,
            activePlayer: 0,
            roundScore: 0,
            scores: [0, 0]
        })
    }

    RollDice = () => {
        var dice = Math.floor(Math.random() * 5);
        this.setState({
            diceIndex: dice
        })

        if (dice != 0) {

            let roundScore = this.state.roundScore
            roundScore += (dice + 1)

            this.setState({
                roundScore: roundScore
            })
        } else {

            this.setState({
                roundScore: 0
            })

            this.setState({
                activePlayer: this.state.activePlayer ? 0 : 1
            })
        }
    }

    holdGame = () => {

        const score = this.state.scores[this.state.activePlayer] + this.state.roundScore
        console.log(score)
        const scores = [...this.state.scores]
        scores[this.state.activePlayer] = score
        console.log(scores)

        this.setState({
            scores
        })

        this.setState({
            roundScore: 0
        })

        this.setState({
            activePlayer: this.state.activePlayer ? 0 : 1
        })

        if (score >= 100) {
            let playerwon = this.state.activePlayer+1
            Alert.alert(
                "Player " + playerwon + " Won !!!",
                "My Alert Msg",
                [
                    {
                        text: "New Game",
                        onPress: () => this.Newgame(),
                    },
                ]
            );
        }
    }

    render() {

        const { roundScore, activePlayer, scores } = this.state
        const backgroundColor1 = activePlayer ? '#fff' : '#f7f7f7'
        const backgroundColor2 = activePlayer ? '#f7f7f7' : '#fff'
        return (
            <View style={{ height: '100%', width: '100%' }}>
                <ImageBackground source={require('./images/back.jpg')} style={{ flex: 1, resizeMode: "stretch" }}>

                    <View style={{ flex: 1, flexDirection: 'row', backgroundColor: '#fff', margin: 25, }}>

                        <View style={{ flex: 1, backgroundColor: backgroundColor1, width: '50%', justifyContent: 'center', alignItems: 'center' }} >
                            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                <Text style={{ fontSize: 25 }}>Player 1 </Text>
                                {!activePlayer && <Text style={{ fontSize: 50, color: 'red', fontWeight: '500' }}>{'\u2022'}</Text>}
                            </View>
                            <Text style={{ fontSize: 30, marginBottom: 30 }}>{scores[0]}</Text>

                            <View style={{ alignItems: 'center', width: 100, padding: 12, backgroundColor: 'red' }}>
                                <Text style={{ fontSize: 17, color: 'white' }}>CURRENT</Text>
                                <Text style={{ fontSize: 18, color: 'white' }}>{activePlayer ? 0 : roundScore}</Text>
                            </View>
                        </View>

                        <View style={{ flex: 1, backgroundColor: backgroundColor2, width: '50%', justifyContent: 'center', alignItems: 'center' }} >
                            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                <Text style={{ fontSize: 25 }}>Player 2 </Text>
                                {activePlayer ? <Text style={{ fontSize: 50, color: 'red', fontWeight: '500' }}>{'\u2022'}</Text> : null}
                            </View>
                            <Text style={{ fontSize: 30, marginBottom: 30 }}>{scores[1]}</Text>

                            <View style={{ alignItems: 'center', width: 100, padding: 12, backgroundColor: 'red' }}>
                                <Text style={{ fontSize: 17, color: 'white' }}>CURRENT</Text>
                                <Text style={{ fontSize: 18, color: 'white' }}>{activePlayer ? roundScore : 0}</Text>
                            </View>
                        </View>

                    </View>
                    <View style={{ position: 'absolute', height: ' 100%', top: 50, width: 100, alignItems: 'center', alignSelf: 'center' }}>

                        <View style={{ width: 100, height: 50, marginTop: 10 }}>
                            <Button onPress={this.Newgame} title="New game"></Button>
                        </View>

                        <View>
                            <Image source={this.imageURL[this.state.diceIndex]} style={{ width: 70, height: 70, marginTop: 10 }} />
                        </View>

                        <View style={{ width: 100, height: 50, marginTop: 20 }}>
                            <Button onPress={this.RollDice} title="Roll dice"></Button>
                        </View>

                        <TouchableOpacity onPress={this.holdGame} style={{ width: 100, height: 50, marginTop: 10, backgroundColor: "white", alignItems: 'center', justifyContent: 'center' }}>
                            <Text style={{ textAlign: 'center' }}>Hold</Text>
                        </TouchableOpacity>
                    </View>
                </ImageBackground>
            </View>
        )
    }

}
export default Game