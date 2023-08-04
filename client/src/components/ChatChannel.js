import { useMutation, useQuery } from "@apollo/client"
import { CHANNEL_DETAILS } from "./utils/queries"
import { ADD_MESSAGE } from "./utils/mutations"

export default function Channel() {


    const { data, loading, error } = useQuery(CHANNEL_DETAILS, {
        pollInterval: 2000,    
    })  
    console.log(data);

    const [addMessage] = useMutation(ADD_MESSAGE,{
      update: (cache, {data})=> {
        cache.modify({
            id: cache.identify({
                __typename: "Channel",
                id: "1",
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
    
            await addMessage({
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
            {data && (
                <>
                    <h1>{data.channel.name} Channel</h1>
                    {data.channel.messages.length ? data.channel.messages.map(msg => (
                        <p key={msg.id}>{msg.text}</p>)) : "No messages"}
                    <br />
                    <br />
                </>
            )}
            <input
                type="text"
                placeholder="+ New message"
                onKeyUp={handleKeyUp}
            />
            {error && <div>ERROR: {error.message}</div>}
        </>
    )
}