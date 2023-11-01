import flet


def main(page: flet.Page) -> None:
    page.title = 'Keyboard PRO'
    page.spacing = 30
    page.vertical_alignment = 'center'
    page.horizontal_alignment = 'center'
    page.theme_mode = 'dark'
    page.window_width = 360
    page.window_height = 620
    page.window_resizable = False
    page.window_opacity = 1
    
    # Creating the text views
    key: flet.Text = flet.Text('Key', size=30)
    shift: flet.Text = flet.Text('Shift', size=30, color='red')
    ctrl: flet.Text = flet.Text('Ctrl', size=30, color='blue')
    alt: flet.Text = flet.Text('Alt', size=30, color='green')
    meta: flet.Text = flet.Text('Win', size=30, color='yellow')
    
    # Handling the keyboard events
    def on_keyboard(e: flet.KeyboardEvent) -> None:
        key.value = e.key
        shift.visible = e.shift
        ctrl.visible = e.ctrl
        alt.visible = e.alt
        meta.visible = e.meta
        print(e.data)
        page.update()
        
    # Linking the keyboard events to the page
    page.on_keyboard_event = on_keyboard
    
    # Creating our basic page
    page.add(
        flet.Text('Press any combination of keys...'),
        flet.Row(
            controls=[key, shift, ctrl, alt, meta],
            alignment= flet.MainAxisAlignment.CENTER)
    )
    
if __name__ == '__main__':
    flet.app(target=main)
    

# D:\temp\pyflet
# 14:51:24 > flet run tutorials\004_keyboard.py  
 
# {"key":"D","shift":false,"ctrl":false,"alt":false,"meta":false}
# {"key":"F","shift":false,"ctrl":false,"alt":false,"meta":false}
# {"key":"S","shift":true,"ctrl":false,"alt":false,"meta":false}
# {"key":"D","shift":true,"ctrl":false,"alt":false,"meta":false}
# {"key":"K","shift":true,"ctrl":false,"alt":true,"meta":false}
# {"key":"L","shift":false,"ctrl":false,"alt":false,"meta":false}
# {"key":"L","shift":true,"ctrl":false,"alt":false,"meta":false}
# {"key":"L","shift":false,"ctrl":false,"alt":false,"meta":false}
# {"key":"J","shift":true,"ctrl":false,"alt":false,"meta":false}
# {"key":"J","shift":true,"ctrl":false,"alt":true,"meta":false}
# {"key":"H","shift":false,"ctrl":false,"alt":false,"meta":false}
# {"key":"G","shift":false,"ctrl":false,"alt":false,"meta":false}
# {"key":"H","shift":false,"ctrl":false,"alt":false,"meta":false}
# {"key":"J","shift":false,"ctrl":false,"alt":false,"meta":false}
# {"key":"F","shift":false,"ctrl":false,"alt":false,"meta":false}
# {"key":"U","shift":false,"ctrl":false,"alt":false,"meta":false}
# {"key":"Y","shift":false,"ctrl":false,"alt":false,"meta":false}
# {"key":"N","shift":false,"ctrl":false,"alt":false,"meta":false}
# {"key":"F","shift":false,"ctrl":false,"alt":false,"meta":false}
# {"key":"J","shift":false,"ctrl":false,"alt":false,"meta":false}
# {"key":"D","shift":false,"ctrl":false,"alt":false,"meta":false}
# {"key":"H","shift":false,"ctrl":false,"alt":false,"meta":false}
# {"key":"H","shift":false,"ctrl":false,"alt":false,"meta":false}
# {"key":"H","shift":true,"ctrl":false,"alt":false,"meta":false}
# {"key":"K","shift":true,"ctrl":false,"alt":false,"meta":false}
# {"key":"N","shift":true,"ctrl":false,"alt":false,"meta":false}
# {"key":"J","shift":true,"ctrl":false,"alt":false,"meta":false}
# {"key":"D","shift":true,"ctrl":false,"alt":false,"meta":false}
# {"key":"K","shift":true,"ctrl":false,"alt":false,"meta":false}
# {"key":"L","shift":true,"ctrl":false,"alt":true,"meta":false}
# {"key":"J","shift":true,"ctrl":false,"alt":true,"meta":false}
# {"key":"J","shift":true,"ctrl":false,"alt":true,"meta":true}
# {"key":"I","shift":true,"ctrl":false,"alt":true,"meta":true}
# {"key":"K","shift":false,"ctrl":false,"alt":false,"meta":false}
# {"key":"J","shift":true,"ctrl":false,"alt":false,"meta":true}
# {"key":"I","shift":true,"ctrl":false,"alt":false,"meta":true}
# {"key":"I","shift":true,"ctrl":false,"alt":true,"meta":true}