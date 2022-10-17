import type {Types, PopulatedDoc, Document} from 'mongoose';
import {Schema, model} from 'mongoose';
import type {User} from '../user/model';

export type Comment = {
  _id: Types.ObjectId;
  authorId: Types.ObjectId;
  dateCreated: Date;
  content: string;
  dateModified: Date;
};

export type PopulatedComment = {
  _id: Types.ObjectId;
  authorId: User;
  dateCreated: Date;
  content: string;
  dateModified: Date;
};

const CommentSchema = new Schema<Comment>({

  authorId: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: 'User'
  },
  dateCreated: {
    type: Date,
    required: true
  },
  content: {
    type: String,
    required: true
  },
  dateModified: {
    type: Date,
    required: true
  }
});

const CommentModel = model<Comment>('Comment', CommentSchema);
export default CommentModel;
