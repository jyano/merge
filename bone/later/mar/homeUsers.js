/*
nav, #main {
    float: left;
    min-height: 200px;
    padding: 15px;
}

nav {
    background: #eee;
    width: 100px;

    a {
        display: block;
    }
}
<div id="app_layout">
<nav>
<a href="#home">Home</a>
<a href="#user-list">Users</a>
</nav>
<div id="main"></div>
</div>
# Data Models
class User extends Backbone.Model
class Users extends Backbone.Collection
model: User
*/

users = new Users([
    {name: 'Jeremy Ashkenas', twitter: 'jashkenas'},
    {name: 'Brad Dunbar', twitter: 'braddunbar'},
    {name: 'Casey Foster', twitter: 'caseywebdev'}
])

# Views
class UserView extends Backbone.Marionette.ItemView
template: (viewObject) ->
_.template('<li><%= name %> (@<%= twitter %>)</li>', viewObject)

class UserListView extends Backbone.Marionette.CollectionView
itemView: UserView
tagName: 'ul'

class HomeView extends Backbone.Marionette.ItemView
template: -> 'Example App Home'

# Main Layout
class AppLayout extends Backbone.Marionette.Layout
el: '#app_layout'

regions:
    main: '#main'

events:
    'click a[href=#home]': 'showHome'
'click a[href=#user-list]': 'showUserList'

initialize: ->
@showHome()

showHome: =>
@main.show new HomeView()

showUserList: =>
@main.show new UserListView(collection: users)

# Initialize
(new AppLayout()).render()