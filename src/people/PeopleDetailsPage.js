import React from "react";
import { getAll } from "../api/people"



class PeopleDetailsPage extends React.Component {
    state = {
       people: [],
    }

  
        
       
        async componentDidMount () {
         const url = this.props.location.pathname.toLowerCase()
         const id  = url.match(/(d+)$/);
         console.log(id);

         const people = await getAll();
         this.setState({  people  });
         console.log(people);
        }

        
        
      

    render() {
        
      
        return (
        <table>
            <tbody>
                
               
            </tbody>
        </table>
        )
    }
}

export default PeopleDetailsPage


