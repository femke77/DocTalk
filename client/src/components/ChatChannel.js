import { useMutation, useQuery } from "@apollo/client"
import { CHANNEL_DETAILS } from "../utils/queries"
import { ADD_CHAT_MESSAGE } from "../utils/mutations"
import Auth from "../utils/auth"

export default function Channel() {

    const id = "1"

    const { data, loading, error } = useQuery(CHANNEL_DETAILS, {
        variables: { channelId: id },
        pollInterval: 3000,  

    })  
    console.log(data);
    // example of updating the cache when you have a query that has an arg
    // and a mutation that needs to modify the object (channel has array)
    const [addChatMessage] = useMutation(ADD_CHAT_MESSAGE,{
      update: (cache, {data})=> {
        cache.modify({
            id: cache.identify({
                __typename: "Channel",
                id: id,
            }),
            fields:{
                messages: (previous, {toReference}) => [...previous, toReference(data.addMessage) ]
            }
        })
      }


    })
    console.log(id, data);
    if (loading) return <div>Loading....</div>

    const handleKeyUp = async (evt) => {
        if (evt.keyCode === 13) {
            // ADD CACHE AND OP UI
            await addChatMessage({
                variables: {
                    message: {
                        channelId: id,
                        text: evt.target.value
                    }
                },

            })
            evt.target.value = "";
        }
    }
    return (
        <>
            {data && Auth.loggedIn() ?(
                <>
                    <h1>{data.channel.name} </h1>
                    {/* <h4>{Auth.getProfile().data.username}: {" "}</h4> */}
                    {data.channel.messages.length ? data.channel.messages.map(msg => (
                        <p key={msg.id}>{msg.username}: {msg.text}</p>)) : "No messages"}
                    <br />
                    <br />

                <input
                type="text"
                placeholder="+ New message"
                onKeyUp={handleKeyUp}
            />
               </>
            ) :(<div>You must be logged in to chat. </div>)}

            {error && <div>ERROR: {error.message}</div>}
        </>
    )
}

// still working on making name appear above the chat