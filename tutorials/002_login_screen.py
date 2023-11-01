import flet
from flet import TextField, Checkbox, ElevatedButton, Text, Row, Column
from flet_core.control_event import ControlEvent


def main(page: flet.Page) -> None:
    page.title = 'SignUp'
    page.vertical_alignment = flet.MainAxisAlignment.CENTER
    page.theme_mode = flet.ThemeMode.SYSTEM
    page.window_width = 360
    page.window_height = 620
    page.window_resizable = False
    page.window_opacity = 0.95
    
    # Setup our fields
    username: TextField = TextField(label='Username', text_align=flet.TextAlign.LEFT, width=200)
    password: TextField = TextField(label='Password', text_align=flet.TextAlign.LEFT, width=200, password=True)
    checkbox: Checkbox = Checkbox(label='I agree to stuff', value=False)
    button_submit: ElevatedButton = ElevatedButton(text='Sign up', width=200, height=50, disabled=True)
    
    # Used events
    def validate(e: ControlEvent) -> None:
        if all([username.value, password.value, checkbox.value]):
            button_submit.disabled = False
        else:
            button_submit.disabled = True
        page.update()
        
      
    def submit(e: ControlEvent) -> None:
        print(f'Username: {username.value}\t Password: {password.value}\t Agree: {checkbox.value}')
        page.clean()
        page.add(
            Row(
                controls=[Text(value=f'Welcome: {username.value}', size=20)],
                alignment=flet.MainAxisAlignment.CENTER
            )
        )
        
    # Link the functions to our UI    
    checkbox.on_change = validate
    username.on_change = validate
    password.on_change = validate
    button_submit.on_click = submit
    
    #Render the page sign-up page
    page.add(
        Row(
            controls=[Column([username, password, checkbox, button_submit])],
            alignment=flet.MainAxisAlignment.CENTER
        )
    )
   
    
if __name__ == '__main__':
    # flet.app(target=main, view=flet.AppView.WEB_BROWSER)
    flet.app(target=main)