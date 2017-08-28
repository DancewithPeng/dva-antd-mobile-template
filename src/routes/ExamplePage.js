import * as React from 'react'
import { connect } from 'dva'
import Example from '../components/Example'

class ExamplePage extends React.Component {
    render() {
        return (
            <Example />
        )
    }
}

export default connect()(ExamplePage)