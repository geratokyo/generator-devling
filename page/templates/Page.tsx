
import * as React from 'react'; 
import * as ReactRedux from 'react-redux';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
  
import { IStoreState } from '../../_reducers';
import { iActionType, Translation } from '../../models/models';


export interface <%= uCamelCName %>Props extends ReactRedux.DispatchProp<any>{
    className?:string;
    locale:Translation;
}

const INIT_STATE:<%= uCamelCName %>State = {

}

export interface <%= uCamelCName %>State{

}


export class <%= uCamelCName %> extends React.Component<<%= uCamelCName %>Props, <%= uCamelCName %>State>{

    constructor(props:<%= uCamelCName %>Props){
        super(props); 
        this.state = INIT_STATE; 
    }

    render(){
        let {props, state} = this;
        let cls = this.props.className || "";
        return (
            <div className={"<%= kebabCName %> " + cls}>
                
            </div>
        )
    }
}




const mapStateToProps = (state: IStoreState, ownProps):Partial<<%= uCamelCName %>Props> =>{
    return {
        locale:state.app.locale
    }
}

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators({
  }, dispatch);

export default connect(mapStateToProps,mapDispatchToProps)(<%= uCamelCName %>);