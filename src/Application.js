import React , {Component} from 'react';
import {Container, Input, Buttons, ButtonIn} from './Calcultor.styled';

class Application extends Component{
    state = {
      input:'',
      color:'Nada'
    }
    handleClick =(e) =>{
        e.preventDefault();
        let input =e.target.value;
        if (!/[ ^=|^D|^C|^%]/.test(input) && input !=='-/+')
        {
          this.setState({input:this.state.input + input.toString(),
          float:((/[+-/x.]/.test(input))) ? true:false
          });
        }
        else if (input === 'C')
        {
          this.setState({input:'',
                         color:'Nada'});
        }
        else if (input === 'Del')
        {
          this.setState({input:this.state.input.slice(0, -1)});
        }
        else if (input === '-/+')
        {
          this.setState({input:this.state.input[0]==='-'?
                        this.state.input.replace('-', ''):
                        '-'+this.state.input});
        }
        else if(input ==='%')
        {
          this.setState({input:(eval(this.state.input)/100).toString()});   
        }
        else
      {
        this.setState({input:eval(this.state.input).toString(),
                       color :'#454545'});
      }
}
render(){
  let values =['C', '%', '/','Del',7,8,9,'*',4,5,6,'-',1,2,3,'+',0,'.','-/+','=']; 
    return (
      <Container>
        <Input type={"text"} color={this.state.color}  value={this.state.input} readOnly />
        <Buttons>
        { values.map( (e)=> <ButtonIn
          key={e}
          onClick={this.handleClick}
          name={e}
          value={e}
          disabled={((e === '*' || e === '/' || e === '%' || e==='+' || e==='-' || e==='=') && this.state.input.length === 0)
                      || (e === '.' && this.state.float) ||
                      ( this.state.color !== 'Nada' &&  e !== 'C') }
          readOnly />
        )
      }
      </Buttons>
      </Container>
      );
    }

}

export default Application;