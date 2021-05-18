const Utilisateur = Parse.Object.extend('Utilisateur');
const query = new Parse.Query(Utilisateur);
query.equalTo("Time", "10/1/2021 10:01:00 PM");
query.find().then((results) => {
  for (const object of results){
  const Time = object.get("Time")
  const Value = object.get("Value")
  if (typeof document !== 'undefined')
  document.write(`Utilisateur found: ${JSON.stringify(Time)}`);
  document.write(`Utilisateur found: ${JSON.stringify(Value)}`);
  console.log('Utilisateur found:', Time);
  console.log('Utilisateur found:', Value);
}}, (error) => {
  if (typeof document !== 'undefined') document.write(`Error while fetching Utilisateur: ${JSON.stringify(error)}`);
  console.error('Error while fetching Utilisateur', error);
});
