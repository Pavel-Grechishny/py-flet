from flet import View, Page, AppBar, ElevatedButton, Text, app
from flet import CrossAxisAlignment, MainAxisAlignment
from flet import RouteChangeEvent, ViewPopEvent

def main(page: Page) -> None:
    """Точка входа"""
    page.title = 'Navigation'
    page.window_width = 480
    page.window_heigth = 620
    page.window_resizable = False
    
    
    def route_change(e: RouteChangeEvent) -> None:
        """"Роутинг
        
        :params e: слушатель события изменения корня RouteChangeEvent 
        """
        page.views.clear()
        
        # Home view
        page.views.append(
            View(
                route='/',
                controls=[
                    AppBar(title=Text('Home'), bgcolor='blue'),
                    Text(value='Home', size=40),
                    ElevatedButton(text='Go to About', on_click=lambda _: page.go('/about')),
                    ElevatedButton(text='Go to Contacts', on_click=lambda _: page.go('/contacts')),
                ],
                vertical_alignment=MainAxisAlignment.CENTER,
                horizontal_alignment=CrossAxisAlignment.CENTER,
                spacing=24
            )
        )
        
        # About
        if page.route == '/about':
            page.views.append(
                View(
                    route='/about',
                    controls=[
                        AppBar(title=Text('About'), bgcolor='blue'),
                        Text(value='About', size=40),
                        # ElevatedButton(text='Go to home', on_click=lambda _: page.go('/')),
                        ElevatedButton(text='Go to Contacts', on_click=lambda _: page.go('/contacts')),
                    ],
                    vertical_alignment=MainAxisAlignment.CENTER,
                    horizontal_alignment=CrossAxisAlignment.CENTER,
                    spacing=24
                )
            )
            
            
        # About
        if page.route == '/contacts':
            page.views.append(
                View(
                    route='/contacts',
                    controls=[
                        AppBar(title=Text('Contacts'), bgcolor='blue'),
                        Text(value='Contacts', size=40),
                        ElevatedButton(text='Go to home', on_click=lambda _: page.go('/')),
                    ],
                    vertical_alignment=MainAxisAlignment.CENTER,
                    horizontal_alignment=CrossAxisAlignment.CENTER,
                    spacing=24
                )
            )
        print(*page.views, sep = '\n')   
        page.update()
        
    
    # Button preview
    def view_pop(e: ViewPopEvent) -> None:
        """docstring"""
        page.views.pop()
        top_view: View = page.views[-1]
        page.go(top_view.route)
        
    
    page.on_route_change = route_change
    page.on_view_pop = view_pop
    
    page.go(page.route)
    
    
    
    
    
if __name__ == '__main__':
    app(target=main)