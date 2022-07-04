class Televisao:

    def __init__(self):
        self.ligada = False
        self.AumentaCanall = 5

    def power(self):
        if self.ligada == True:
            self.ligada = False
        else:
            self.ligada = True

    def AumentaCanal(self):
        if self.ligada:
             self.AumentaCanall += 1 
     

    def DiminuiCanal(self):
        if self.ligada:
             self.AumentaCanall -= 1  


if __name__=='__main__': # Serve para teste, se for estanciado em outra classe, essa parte de baixo não vai ser exercutado.
                         
    tev = Televisao()

    print('Televisao esta ligado ? {} Canal: {}'.format(tev.ligada, tev.AumentaCanall))
    tev.power()
    tev.AumentaCanal()
    tev.AumentaCanal()
    print('Televisao esta ligado ? {} Canal: {}'.format(tev.ligada, tev.AumentaCanall))
    tev.DiminuiCanal()
    print('Televisao esta ligado ? {} Canal: {}'.format(tev.ligada, tev.AumentaCanall))
    tev.power()
    print('Televisao esta ligado ? {} Canal: {}'.format(tev.ligada, tev.AumentaCanall))
    tev.power()
    print('Televisao esta ligado ? {} Canal: {}'.format(tev.ligada, tev.AumentaCanall))

