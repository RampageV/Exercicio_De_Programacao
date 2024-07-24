from time import sleep
import button
import keyboard as kb
import pyautogui as pg 
from pynput.keyboard import Listener
from pynput import keyboard

POKE_POSITION = 1870, 712
LIST_SKILL = ['F3','F4','F6','F7']

def revive():
    my_position = pg.position()
    pg.moveTo(POKE_POSITION)
    pg.click(button="right")
    kb.press(button.key['Q'])
    pg.click(button="right")
    pg.moveTo(my_position)

def attack(hotkey, delay=0.6):
    for item in hotkey:
        kb.press(button.key[item], delay)

def key_code(key):
    if key == keyboard.Key.home:
        return False
    if key == keyboard.Key.page_down:
        attack(LIST_SKILL)
        sleep(2)
        revive()
          


with Listener(on_press=key_code) as listener:
    listener.join()

    