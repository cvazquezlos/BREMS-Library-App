# BREMS - Book Reserve Management System

## About the contributors
+ Blay González, Sergio
  - [Github account](https://github.com/Blay93).
  - Email: s.blay@alumnos.urjc.es
+ Cervera Saldaña, Annhelen
  - [Github account](https://github.com/annyCS).
  - Email: a.cerveras@alumnos.urjc.es
+ Córdova Proaño, Jorge Jherel
  - [Github account](https://github.com/jherel).
  - Email: jj.cordobap@alumnos.urjc.es
+ Vázquez Losada, Carlos
  - [Github account](https://github.com/cvazquezlos).
  - Email: c.vazquezlos@alumnos.urjc.es
 
## About this web application
Online management of resources (books and magazines) in a library. Each resource has a copy which a reader can reserve. This resource will be taken by a reader for 30 days (in case of a books) and for 2 days (in case of magazines).
An administrator will manage the resource loans, resource stock and resource copies.
Web functionality deppends on type of user (administrator o reader). [Link](https://www.youtube.com/watch?v=qlVj2XOEnFA) to explicative video about BREMS (spanish).

### Users: Readers
A reader is an user who can reserve a resource through BREMS app. Those functionalities are public:
+ List of resources.
+ Search resources using a *title*, *author* y/o *resource name*.
+ Reserve a resource.
+ Postpone return date.
+ List of resources to be returned.
+ List of fines.
+ Sing-up.

### Users: Administrator
An administrator is an user who can manage resource data and the loans. Those functionalities are private:
+ Manage resources (books and magazines).
  - Modify resources.
  - Create new resources.
  - Delete resources.
+ Manage copies.
+ Manage loans.
+ Manage fines.
+ Manage users (readers and others administrators).
  - Create new users.
  - Unsubscribe a user.
  - Modify user's information.

### Entities of BREMS' App
In our App, we use these entities: *User*, *fine*, *resource*, *loan* and *copy*.

| Entity   | Description                                                          | Secondary entities     |
|----------|----------------------------------------------------------------------|------------------------|
| User     | Reader and Administrator.                                            | -                      |
| Resource | Book or Magazine which can be reserve by a reader.                   | ResourceType and genre |
| Fine     | Will be applied if a reader returns a resource out of date.          | -                      |
| Loan     | Action through a reader can reserve a copy.                          | ActionType and Token   |
| Copy     | Limited number of resource number which can be reserved by a reader. | -                      |

### Tasks management 
We use [Trello](https://trello.com/b/3hdFhIap/brems) and SCRUM because we think is the best way to work in a group.

### App views
Backend contains views (each page which makes this website useful). As a library, the home page contains a list of all books and magazines avaible. This design is originally made by @annyCS.

#### Index page
![index][index]

#### About page
![about][about]

#### Contact page
![contact][contact]

#### Search page
![search][search]

#### Profile page
![profile][profile]

#### Admin page
![admin][admin]

#### Admin resources page
##### Resources general view
![admin-resources][admin-resources]

##### Edit resource page
![admin-resources-edit][admin-resources-edit]

##### Add resource page
![admin-resources-add][admin-resources-add]

#### Admin loans page
##### Loans general view
![admin-loans][admin-loans]

##### Add loans page
![admin-loans-add][admin-loans-add]

#### Admin users page
##### Users general view
![admin-users][admin-users]

##### Add user page
![admin-users-add][admin-users-add]

## Backend
### Running BREMS Backend
You must have MySQL installed, your conection credentials must be "root" and "1234" (user and pass) and you need to have a MySQL Schema called "BREMS".
1. Download this repository (or clone it).
2. Navigate to "backend/target".
3. Using your shell, execute `java -jar appSpring-0.0.1.jar`.
4. Using Google Chrome (any browser can be used) navigate to "https://localhost:8443".
5. Enjoy it!
### Backend diagrams
#### Backend controllers class diagrams
##### AdminController and services relationships
![admin-controller-and-services][admin-controller-and-services]

##### MainController and services relationships
![main-controller-and-services][main-controller-and-services]

##### ResourceController and services relationships
![resource-controller-and-services][resource-controller-and-services]

##### SearchController and services relationships
![search-controller-and-services][search-controller-and-services]

##### UserController and services relationships
![user-controller-and-services][user-controller-and-services]

#### Backend services class diagrams
##### LogicService class diagrams
###### LogicService and services relationships
![logic-service-and-services][logic-service-and-services]

###### LogicService and controllers relationships
![logic-service-and-controllers][logic-service-and-controllers]

#### App rest controllers class diagrams
##### ActionRestController and services relationships
![action-rest-controller][action-rest-controller]

##### FineRestController and services relationships
![fine-rest-controller][fine-rest-controller]

##### GenreRestController and services relationships
![genre-rest-controller][genre-rest-controller]

##### ResourceCopyRestController and services relationships
![resource-copy-rest-controller][resource-copy-rest-controller]

##### ResourceRestController and services relationships
![resource-rest-controller][resource-rest-controller]

##### ResourceTypeRestController and services relationships
![resource-type-rest-controller][resource-type-rest-controller]

##### UserRestController and services relationships
![user-rest-controller][user-rest-controller]

## Frontend
### Running BREMS Frontend
1. Download this repository (or clone it).
2. Navigate to "frontend".
3. Using your shell, execute `npm install` and then `ng serve`.
4. Using Google Chrome (any browser can be used) navigate to "http://localhost:4200".
5. Enjoy it!
### Frontend diagrams
#### Frontend services
##### ActionService 
![action-service][action-service]

##### FileService 
![file-service][file-service]

##### FineService 
![fine-service][fine-service]

##### GenreService 
![genre-service][genre-service]

##### ResourceCopyService 
![resource-copy-service][resource-copy-service]

##### ResourceService 
![resource-service][resource-service]

##### SessionService 
![session-service][session-service]

##### UserService 
![user-service][user-service]

#### Public module
##### Public component 
![public-component][public-component]

##### Public module 
![public-module][public-module]

##### Public routing module 
![public-routing-module][public-routing-module]

##### HomeComponent 
![home-component][home-component]

##### ProfileComponent 
![profile-component][profile-component]

#### Admin module
##### Admin component 
![admin-component][admin-component]

##### Admin module  
![admin-module][admin-module]

##### Admin routing module
![admin-routing-module][admin-routing-module]

##### DashboardComponent
![dashboard-component][dashboard-component]

##### ManageFinesComponent
![manage-fines-component][manage-fines-component]

##### ManageLoansComponent
![manage-loans-component][manage-loans-component]

##### ManageResourcesComponent
![manage-resources-component][manage-resources-component]

##### ManageUsersComponent
![manage-users-component][manage-users-component]

[index]: /media/README/01-homePage.png
[about]: /media/README/02-aboutPage.png
[contact]: /media/README/03-contactPage.png
[search]: /media/README/04-searchPage.png
[profile]: /media/README/05-profilePage.png
[admin]: /media/README/06-adminPage.png
[admin-resources]: /media/README/07-adminResourcesPage.png
[admin-resources-edit]: /media/README/08-adminResourcesEditPage.png
[admin-resources-add]: /media/README/09-adminResourcesAddPage.png
[admin-loans]: /media/README/10-adminLoansPage.png
[admin-loans-add]: /media/README/11-adminLoansAddPage.png
[admin-users]: /media/README/12-adminUsersPage.png
[admin-users-add]: /media/README/13-adminUsersAddPage.png
[admin-controller-and-services]: /media/README/14-AdminControllerBasicServices.png
[main-controller-and-services]: /media/README/15-MainControllerBasicServices.png
[resource-controller-and-services]: /media/README/16-ResourceControllerBasicServices.png
[search-controller-and-services]: /media/README/17-SearchControllerBasicServices.png
[user-controller-and-services]: /media/README/18-UserControllerBasicServices.png
[logic-service-and-services]: /media/README/19-LogicServiceRelationshipsOtherServices.png
[logic-service-and-controllers]: /media/README/20-LogicServiceRelationships.png
[action-rest-controller]: /media/README/21-ActionRestControllerRelationships.png
[fine-rest-controller]: /media/README/22-FineRestControllerRelationships.png
[genre-rest-controller]: /media/README/23-GenreRestControllerRelationships.png
[resource-copy-rest-controller]: /media/README/24-ResourceCopyRestControllerRelationships.png
[resource-rest-controller]: /media/README/25-ResourceRestControllerRelationships.png
[resource-type-rest-controller]: /media/README/26-ResourceTypeRestControllerRelationships.png
[user-rest-controller]: /media/README/27-UserRestControllerRelationships.png
[action-service]: /media/README/28-ActionService.png
[file-service]: /media/README/29-FileService.png
[fine-service]: /media/README/30-FineService.png
[genre-service]: /media/README/31-GenreService.png
[resource-copy-service]: /media/README/32-ResourceCopyService.png
[resource-service]: /media/README/33-ResourceService.png
[session-service]: /media/README/34-SessionService.png
[user-service]: /media/README/35-UserService.png
[public-component]: /media/README/36-PublicComponent.png
[public-module]: /media/README/37-PublicModule.png
[public-routing-module]: /media/README/38-PublicRoutingModule.png
[home-component]: /media/README/39-HomeComponent.png
[profile-component]: /media/README/40-ProfileComponent.png
[admin-component]: /media/README/41-AdminComponent.png
[admin-module]: /media/README/42-AdminModule.png
[admin-routing-module]: /media/README/43-AdminRoutingModule.png
[dashboard-component]: /media/README/44-DashboardComponent.png
[manage-fines-component]: /media/README/45-ManageFinesComponent.png
[manage-loans-component]: /media/README/46-ManageLoansComponent.png
[manage-resources-component]: /media/README/47-ManageResourcesComponent.png
[manage-users-component]: /media/README/48-ManageUsersComponent.png
