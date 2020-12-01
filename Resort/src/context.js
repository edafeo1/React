import React, { Component } from "react";
import AppData from "./data";


const RoomContext = React.createContext();

export default class RoomProvider extends Component {
  state = {
    rooms: [],
    sortedRooms: [],
    featuredRooms: [],
    loading: true,
    //
    };


    componentDidMount(){
        let rooms = this.formatData(AppData);
        let featuredRooms =  rooms.filter(room => room.feature === true);
        this.setState({
            rooms,
            featuredRooms,
            sortedRooms: rooms,
            loading: false
        });
        console.log(rooms);
    }

    formatData(AppData){
        let tempAppData = AppData.map(AppData =>{
            let id = AppData.sys.id;
            let images = AppData.fields.images.map(images=>
            images.fields.file.url);

            let rooms = {...AppData.fields, images, id};
            return rooms;

        });
        return tempAppData;
    }


    render() {
        return (
            <div>
                <RoomContext.Provider value={{ ...this.state }}>
                    {this.props.children}
                </RoomContext.Provider>
            </div>
        );
    }
}

const RoomConsumer = RoomContext.Consumer;

export{RoomProvider,RoomContext,RoomConsumer};