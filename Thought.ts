// define the thought schema
//const mongoose = require('mongoose')
//const { Schema } = mongoose;
import { Schema, Types, type Document } from "mongoose"
import {Model, model } from 'mongoose';

interface IReaction extends Document {
    reactionId: Schema.Types.ObjectId;
    reactionBody: string;
    username: string;
    createdAt: Schema.Types.Date;
}

interface IThought extends Document {
    thoughtText: string;
    createdAt: Date;
    username: string;
    reactions: IReaction[];
    reactionCount: number; // Virtual property
}



   

const thoughtSchema = new Schema({
    thoughtText: {
        type: String,
        required: true,
        minlength: 1,
        maxlength: 280

    },
    createdAt: {
        type: Date,
        default: Date.now,
        // Example of a getter method for formatting
    },
    username: {
        type: String,
        required: true

        
       
    

   

// create virtual property called reaction count

    virtuals: {
        fullName: {
          get() {
            return `${this.firstName} ${this.lastName}`;
          } 
    }
}
)
