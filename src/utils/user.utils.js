import { User } from "../model/user.model.js";

export const getById = async (id) => {
  return User.findOne({ user_id: id });
};

export const UserSave = async (ctx) => {
  const UserData = {
    first_name: ctx.update.message.from.first_name,
    username: ctx.update.message.from.username,
    user_id: ctx.update.message.from.id,
  };
  const user = new User(UserData);
  await user.save();
};
