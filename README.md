# BREMS - Book Reserve Management System

### About the contributors

* Blay González, Sergio
 * [Github account](https://github.com/Blay93).
 * Email: s.blay@alumnos.urjc.es
* Cervera Saldaña, Annhelen
 * [Github account](https://github.com/annyCS).
 * Email: a.cerveras@alumnos.urjc.es
* Córdova Proaño, Jorge Jherel
 * [Github account](https://github.com/jherel).
 * Email: jj.cordobap@alumnos.urjc.es
* Vázquez Losada, Carlos
 * [Github account](https://github.com/cvazquezlos).
 * Email: c.vazquezlos@alumnos.urjc.es
 
### About this web application

Online management of resources (books and magazines) in a library. Each resource has a copy which a reader can reserve. This resource will be taken by a reader for 30 days (in case of a books) and for 2 days (in case of magazines).
An administrator will manage the resource loans, resource stock and resource copies.
Web functionality deppends on type of user (administrator o reader).

#### Users: Readers
A reader is an user who can reserve a resource through BREMS app. Those functionalities are public:
* List of resources.
* Search resources using a *title*, *author* y/o *resource name*.
* Reserve a resource.
* Postpone return date.
* List of resources to be returned.
* List of fines.
* Sing-up.

#### Users: Administrator
An administrator is an user who can manage resource data and the loans. Those functionalities are private:
* Manage resources (books and magazines).
 * Modify resources.
 * Create new resources.
 * Delete resources.
* Manage copies.
* Manage loans.
* Manage fines.
* Manage users (readers and others administrators).
 * Create new users.
 * Unsubscribe a user.
 * Modify user's information.

#### Entities of BREMS' App
In our App, we use these entities: *User*, *fine*, *resource*, *loan* and *copy*.

| Entity   | Description                                                          | Secondary entities     |
|----------|----------------------------------------------------------------------|------------------------|
| User     | Reader and Administrator.                                            | -                      |
| Resource | Book or Magazine which can be reserve by a reader.                   | ResourceType and genre |
| Fine     | Will be applied if a reader returns a resource out of date.          | -                      |
| Loan     | Action through a reader can reserve a copy.                          | ActionType and Token   |
| Copy     | Limited number of resource number which can be reserved by a reader. | -                      |

#### Tasks management 
We use [Trello](https://trello.com/b/3hdFhIap/brems) and SCRUM because we think is the best way to work in a group.
