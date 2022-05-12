const { ApolloServer, gql } = require('apollo-server')

const posts = [{
    id: "1",
    title: "post1"

}, {
    id: "2",
    title: "post2"

}]

const typeDefs = gql `
type Post{
    id:String,
    title:String,
}

type Query{
    posts:[Post]
}

type Mutation{
    addPost(title:String):Post
}
`

const resolvers = {
    Query: {
        posts: () => posts
    },

    Mutation: {
        addPost: (_, { title }) => {
            posts.push({ id: posts.length + 1, title })
            return posts[posts.length - 1]
        }
    }
}

const server = new ApolloServer({
    resolvers,
    typeDefs
})

server.listen(8000, () => { console.log("Hello") })