import React from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';
import posed, { PoseGroup } from "react-pose";
import styled from "styled-components";
import Flux from "@4geeksacademy/react-flux-dash";
import {getAllCategories, store} from "../flux.js";

const CategoryContainer = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Item = posed.li({
  enter: { opacity: 1 },
  exit: { opacity: 0 }
});


const StyledItem = styled(Item)`
  padding: 15px;
  list-style-type: none;
  margin: 5px 0px 5px 0px;
  border: 1px solid #e3e3e3;
`;


export default class CategoryList extends React.Component {
    
    constructor(){
        super();
        this.state = {
            categories: [
                { id: 1, text: "React" },
                { id: 2, text: "Javascript" },
                { id: 3, text: "Programming" },
                { id: 4, text: "Animations" }
            ]
        };
    }
    
  componentDidMount(){
        //This function fetches all categories from the database.
        getAllCategories();
        //This is getting the categories from the state & if there are categories
        //then subscribe
        let categories = store.getState('categories');
        if(categories) this.setState({categories});
        this.subscribe(store, 'categories', (categories) => {
            this.setState({ categories });
            console.log(categories);
        });
        const ItemList = ({ categories }) => (
            <ul>
                <PoseGroup>
                    {this.categories.map(c => 
                        <StyledItem 
                        key={c.id}><Link to={'category/'+ c.slug}> {c.name}</Link></StyledItem>)}
                </PoseGroup>
            </ul>
        );
    }
    
    render(){
        const ItemList = ({ categories }) => (
            <ul>
                <PoseGroup>
                    {this.categories.map(c => 
                        <StyledItem 
                        key={c.id}><Link to={'category/'+ c.slug}> {c.name}</Link></StyledItem>)}
                </PoseGroup>
            </ul>
        );
        return(
            <CategoryContainer>
                <ItemList categories={this.state.categories} />
            </CategoryContainer>
        );
     }
}
CategoryList.propTypes = {
  categories: PropTypes.string
};
