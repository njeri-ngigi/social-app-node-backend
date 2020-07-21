export default {
  welcomeController: (req, res) => (
    res.status(200).send({
      message: 'welcome to social app backend',
      graphql: "use the path '/social-app/graphql' to access"
    })
  )
}
