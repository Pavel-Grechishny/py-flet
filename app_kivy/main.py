from kivy.app import App
from kivy.lang import Builder
from kivy.uix.boxlayout import BoxLayout
from kivy.properties import StringProperty
from kivy.uix.button import Button
from kivy.uix.textinput import TextInput

KV = """
MyBL:

    orientation: "vertical"
    size_hint: (0.95, 0.95)
    pos_hint: {"center_x": 0.5, "center_y": 0.5}
    Label:
        font_size: "30sp"
        multiline: True
        text_size: self.width*0.98, None
        size_hint_x: 1.0
        size_hint_y: None
        height: self.texture_size[1] + 15
        text: root.data_label
        markup: True
    TextInput:
        id: Inp
        multiline: False
        padding_y: (5, 5)
        size_hint: (1, 0.5)
    Button:
        text: "Поиск"
        bold: True
        background_color: "#00FFCE"
        size_hint: (1, 0.5)
        on_press: root.func_find()
    Button:
        text: "Помощь"
        bold: True
        background_color: "#00FFCE"
        size_hint: (1, 0.5)
        on_press: root.func_help()
    Button:
        text: "Выход"
        bold: True
        background_color: "#00FFCE"
        size_hint: (1, 0.5)
        on_press: root.func_exit()

"""

class MyBL(BoxLayout):
    """doc"""

    data_label = StringProperty('Треугольник!')
    
    def func_find(self):
        """doc"""
        print('Нажата кнопка Поиск...')
        
    def func_help(self):
        """doc"""
        print('Нажата кнопка Помощь...')
        
    def func_exit(self):
        """doc"""
        print('Нажата кнопка Выход...')


class MyApp(App):
    """doc"""
    
    running = True
    
    def build(self):
        """doc"""
        return Builder.load_string(KV)
        
    def on_stop(self):
        """doc"""
        self.running = False


MyApp().run()




# >>> dir(App)
# ['__class__', '__delattr__', '__dict__', '__dir__', '__doc__', '__eq__', '__events__', '__format__', '__ge__', '__getattribute__', '__getstate__', '__gt__', '__hash__', '__init__', '__init_subclass__', '__le__', '__lt__', '__module__', '__ne__', '__new__', '__proxy_getter', '__proxy_setter', '__pyx_vtable__', '__reduce__', '__reduce_ex__', '__repr__', '__self__', '__setattr__', '__setstate__', '__sizeof__', '__str__', '__subclasshook__', '_get_user_data_dir', '_install_settings_keys', '_kwargs_applied_init', '_on_config_change', '_on_keyboard_settings', '_proxy_ref', '_run_prepare', '_running_app', '_stop', '_user_data_dir', 'apply_property', 'async_run', 'bind', 'build', 'build_config', 'build_settings', 'close_settings', 'create_property', 'create_settings', 'destroy_settings', 'directory', 'dispatch', 'dispatch_children', 'dispatch_generic', 'display_settings', 'events', 'fbind', 'funbind', 'get_application_config', 'get_application_icon', 'get_application_name', 'get_property_observers', 'get_running_app', 'getter', 'icon', 'is_event_type', 'kv_directory', 'kv_file', 'load_config', 'load_kv', 'name', 'on_config_change', 'on_icon', 'on_pause', 'on_resume', 'on_start', 'on_stop', 'on_title', 'open_settings', 'pause', 'properties', 'property', 'proxy_ref', 'register_event_type', 'root_window', 'run', 'setter', 'settings_cls', 'stop', 'title', 'uid', 'unbind', 'unbind_uid', 'unregister_event_type', 'unregister_event_types', 'use_kivy_settings', 'user_data_dir']
# >>> dir(Builder)
# ['__class__', '__delattr__', '__dict__', '__dir__', '__doc__', '__eq__', '__format__', '__ge__', '__getattribute__', '__getstate__', '__gt__', '__hash__', '__init__', '__init_subclass__', '__le__', '__lt__', '__module__', '__ne__', '__new__', '__reduce__', '__reduce_ex__', '__repr__', '__setattr__', '__sizeof__', '__str__', '__subclasshook__', '__weakref__', '_apply_rule', '_build_canvas', '_clear_matchcache', '_current_filename', '_match_cache', '_match_name_cache', 'apply', 'apply_rules', 'create_from', 'dynamic_classes', 'files', 'load_file', 'load_string', 'match', 'match_rule_name', 'rulectx', 'rules', 'sync', 'template', 'templates', 'unbind_property', 'unbind_widget', 'unload_file']
# >>> dir(BoxLayout)
# ['__class__', '__delattr__', '__dict__', '__dir__', '__doc__', '__eq__', '__events__', '__format__', '__ge__', '__getattribute__', '__getstate__', '__gt__', '__hash__', '__init__', '__init_subclass__', '__le__', '__lt__', '__metaclass__', '__module__', '__ne__', '__new__', '__proxy_getter', '__proxy_setter', '__pyx_vtable__', '__reduce__', '__reduce_ex__', '__repr__', '__self__', '__setattr__', '__setstate__', '__sizeof__', '__str__', '__subclasshook__', '_apply_transform', '_find_index_in_motion_filter', '_iterate_layout', '_kwargs_applied_init', '_proxy_ref', '_trigger_layout', '_update_motion_filter', '_walk', '_walk_reverse', 'add_widget', 'apply_class_lang_rules', 'apply_property', 'bind', 'canvas', 'center', 'center_x', 'center_y', 'children', 'clear_widgets', 'cls', 'collide_point', 'collide_widget', 'create_property', 'dec_disabled', 'disabled', 'dispatch', 'dispatch_children', 'dispatch_generic', 'do_layout', 'events', 'export_as_image', 'export_to_png', 'fbind', 'funbind', 'get_center_x', 'get_center_y', 'get_disabled', 'get_parent_window', 'get_property_observers', 'get_right', 'get_root_window', 'get_top', 'get_window_matrix', 'getter', 'height', 'ids', 'inc_disabled', 'is_event_type', 'layout_hint_with_bounds', 'minimum_height', 'minimum_size', 'minimum_width', 'motion_filter', 'on_kv_post', 'on_motion', 'on_opacity', 'on_touch_down', 'on_touch_move', 'on_touch_up', 'opacity', 'orientation', 'padding', 'parent', 'pos', 'pos_hint', 'properties', 'property', 'proxy_ref', 'register_event_type', 'register_for_motion_event', 'remove_widget', 'right', 'set_center_x', 'set_center_y', 'set_disabled', 'set_right', 'set_top', 'setter', 'size', 'size_hint', 'size_hint_max', 'size_hint_max_x', 'size_hint_max_y', 'size_hint_min', 'size_hint_min_x', 'size_hint_min_y', 'size_hint_x', 'size_hint_y', 'spacing', 'to_local', 'to_parent', 'to_widget', 'to_window', 'top', 'uid', 'unbind', 'unbind_uid', 'unregister_event_type', 'unregister_event_types', 'unregister_for_motion_event', 'walk', 'walk_reverse', 'width', 'x', 'y']
# >>> dir(StringProperty)
# ['__class__', '__delattr__', '__delete__', '__dir__', '__doc__', '__eq__', '__format__', '__ge__', '__get__', '__getattribute__', '__getstate__', '__gt__', '__hash__', '__init__', '__init_subclass__', '__le__', '__lt__', '__ne__', '__new__', '__pyx_vtable__', '__reduce__', '__reduce_ex__', '__repr__', '__set__', '__set_name__', '__setattr__', '__setstate__', '__sizeof__', '__str__', '__subclasshook__', 'bind', 'defaultvalue', 'dispatch', 'fbind', 'funbind', 'get', 'link', 'link_deps', 'link_eagerly', 'name', 'set', 'set_name', 'unbind', 'unbind_uid']
