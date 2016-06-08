import {bootstrap}    from 'angular2/platform/browser'
import {AppComponent} from './app.component'

/*without <any> -> Argument type AppComponent is not assignable to parameter type Type*/
bootstrap( <any>AppComponent );