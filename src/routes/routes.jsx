import { AppLayout } from "../components/layout/AppLayout";
import { PostComments } from "../components/PostComments";
import { UserList } from "../components/UserList";
import { UserPosts } from "../components/UserPosts";

export const routes = [
    {
        path:"/",
        element: <AppLayout/>,
        children: [
            {
                path: "users",
                element: <UserList/>
            },
             {
                path: "users/:id/posts",
                element: <UserPosts/>
            },
             {
                path: "posts/:id/comments",
                element: <PostComments/>
            },
        ]
    }
]