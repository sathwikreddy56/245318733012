async function Welcome(agent){
    console.log(agent.intent+" intent triggered");
    const out = "Sorry i cannot be of a much help!"
    await agent.add(out);
}
module.exports = Welcome