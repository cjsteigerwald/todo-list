import React from 'react';
import { connect } from 'react-redux';

import Table from 'react-bootstrap/Table';
import BuildTableColumn from './BuildTableColumn';

const BuildTable = ( { todos = [], statusList }) => {
 
    return (
        <>
            <Table>
                <thead>
                    <tr>
                        {statusList.map((item, index) => (<th key={index}>{item}
                        </th>))}
                    </tr>
                    </thead> 
                    <tbody>
                    <tr>                       
                        {statusList.map((status, index) => 
                            <BuildTableColumn status={status} statusList={statusList} key={index}/>)}
                    </tr>                                    
                </tbody>
            </Table>
        </>
    )
}

// Below gives access to React Store

// Maps the state Object to props then passed in as state to AddTodoForm ()
const mapStateToProps = state => ({
    todos: state.todos,
});


export default connect(mapStateToProps, null)(BuildTable);