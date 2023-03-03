import axios from 'axios';
const API=axios.create({baseURL: "https://technotes-api.onrender.com"});
export const getTimelinePosts=(id)=>API.post(`/posts/${id}/timeline`)
export const likePost=(id,userId)=>API.put(`posts/${id}/like`,{userId:userId})