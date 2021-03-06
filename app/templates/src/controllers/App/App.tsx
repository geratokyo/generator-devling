import * as React from 'react';
import { Reducer } from './Reducer';
import { AppProps, inAppState, WINDOW_VIEWS, inAppInitialState, AppInitState, AppState } from './StateAndProps';
import { ACTIONS, TYPES } from './Actions';
import * as _ from 'lodash';
import { bindActionCreators, Dispatch } from 'redux';
import { connect } from 'react-redux';
import {
    HashRouter as Router,
    Route,
    Link,
    Switch,
    Redirect
} from 'react-router-dom'

import HomePage from '../../pages/Homepage/Homepage';
import { DataService } from '../../services/DataService';

export const STATE_KEY = 'app';

class App extends React.Component<AppProps, inAppState>{
    DS:DataService; 
    constructor(props:AppProps) {
        super(props);
        this.state = inAppInitialState;
        this.DS = new DataService(); 
    }

    componentDidMount(){
        if(this.DS.isDataLoaded){
            this.props.loadData(this.DS.getData()); 
        }else{
            this.DS.load().then((e)=>{
                this.props.loadData(e); 
            })
        }
    }

    render() {
        let state = this.state,
            props = this.props;
        return (
            <div className={`app`}>
                <Router>
                    <Switch>
                        <Route exact path="/" component={HomePage} />
                    </Switch>
                </Router>
            </div>
        );
    }
};

function mapStateToProps(state: any, ownProps) {
    return {
        appState: state.app
    }
}


const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators({loadData: ACTIONS.DATA_LOADED}, dispatch);

export default connect(mapStateToProps,mapDispatchToProps)(App);