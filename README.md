# Pokemon Proxy Server

This node server acts as my **middle man** to talk to an API endpoint that does
not start with *https*.
:fire: :fire: :fire: :fire: :fire:

## Proxy Server Endpoints

Currently this server routes only two end points for Pokemon data. :dragon_face:

`/pokemon` will respond with a list of all pokemon.

They get sent as an `[ ]` of 20 pokemon with pagination for the rest.

`/pokemon/id` will respond with an individual pokemon data.

This endpoint needs to receive a url with an id for the pokemon info you are requesting.

It should look something like this.

` http://pokeapi.co/api/v2/pokemon/9/ ` the 9 is the dynamic part of this url that will
give you individual pokemon info.

#### Side Note

This server his hosted by **Heroku** on a free *hobby* account.

###### Disclaimer

The **pokeapi** does not belong to me nor do i maintain it.

This proxy server simply allows requests to be made from a `https` deployed environment ie *github*.
