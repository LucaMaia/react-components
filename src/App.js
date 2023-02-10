import './App.css';

// Components
import ButtonComponents from "./components/Button";
import NavbarComponent from "./components/Navbar";
import Cards from "./components/Card";
import DropdownComponent from "./components/Dropdown";
import BreadcrumbComponent from "./components/Breadcrumb";
import AccordionComponent from "./components/Accordion";
import Tabelas from "./components/Tabelas";
import CarouselComponent from "./components/Caroussel";
import NavbarComponentizado from "./components/NavBarComponentizado";
import CardBeneficios from "./components/CardBeneficios";
import CarousselAvatar from "./components/CarousselAvatar";
import CardMuiComponent from "./components/CardMUI";

let accordion = [
    {
        "title": "Titulo 3",
        "text": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
    },
    {
        "title": "Titulo 1",
        "text": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
    },
    {
        "title": "Titulo 4",
        "text": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
    },
]

let breadcrumb = [
    {
        "link": "Luca",
        "href":"/login"
    },
    {
        "link": "Maia",
        "href":"/test"
    },
    {
        "link": "Oliveira",
        "href":"/test"
    },
]

let cards = [
    {
        "title": "Titulo 1",
        "text": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        "image": "https://escutaqueebom.com/wp-content/uploads/2018/08/Sidoka.jpg",
        "alt":"Sidoka",
        "height":"290"
    },
    {
        "title": "Titulo 1",
        "text": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        "image": "https://escutaqueebom.com/wp-content/uploads/2018/08/Sidoka.jpg",
        "alt":"Sidoka",
        "height":"290"
    },

]

let dropdowns = [
    {
        "link":"Exemplo 2",
        "href":"/"
    },
    {
        "link":"Exemplo 4",
        "href":"/"
    },
    {
        "link":"Exemplo 3",
        "href":"/"
    },
]

let carroussel = [
    {
        "title":"Encontro de Bambas 2021",
        "text":"Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        "src":"https://cdn.pixabay.com/photo/2018/07/31/22/08/lion-3576045__480.jpg"
    },
    {
        "title":"Encontro de Bambas 2022",
        "text":"Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        "src":"https://burst.shopifycdn.com/photos/perfect-yellow-flower.jpg?width=1200&format=pjpg&exif=1&iptc=1"
    },
    {
        "title":"Encontro de Bambas 2023",
        "text":"Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        "src":"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBUUFBcUFRUXGBcYGxobGxoYGxsXGh4aGhobGBsaFxshICwkGx0pHhgaJTYlKS4wMzMzGiI5PjkxPSwyMzIBCwsLEA4QHRISHjIpIikyMjIyNDQyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMv/AABEIAKgBLAMBIgACEQEDEQH/xAAcAAABBQEBAQAAAAAAAAAAAAAFAQIDBAYABwj/xAA+EAACAQMDAgQEBAUCBQMFAAABAhEAAyEEEjFBUQUiYXETMoGRBkKhsSNSwdHwFOEVM2KC8XKS0kNTg6Ky/8QAGQEAAwEBAQAAAAAAAAAAAAAAAAECAwQF/8QAKxEAAgICAgEDAgYDAQAAAAAAAAECEQMhEjFBBBNRIqEyYXGRscEUgfAF/9oADAMBAAIRAxEAPwDylFFWbVlmICiT9v3quFGP1+9P3nisWUTKenPp/v8AWiGn0/l34MmII8vHUgjaecGO/EUOtNGaJ6NrefiA5EAgxB6NEeYf9OJnmsZui4o7TaZmJgcAk8cDn3qylmcz9f70llULcmJwQBMT2446US06r3/z/P3rCcmjojjs7SWyJkE4kQJ45n0jr6UUtaUXBjmpNLpkiSR9x+39aKr4cqv/AA3njPy5PQjvXHkn5NVBrTK+i8Na4hBUkrzHJjiO9W9b4Q5W0mCrHc0SflA4aDGCR9Otbn8O2ALYJA3dx1q3qNCpJcATtjies8Vr7EnBTi7MpZUpOLR5D4poDJWCMyecj+wj96Aak/DIjBE8ckHBB6cGPrXpGu8J3F9xZWMsqKNxYDLb4yveBOPtWW8a8KtW3ZVI9CQx/KDmRgySDEny9c1OKTpNjkk3SANi+pWSWFydxBxbYEkCAOHG4kMcAiMc1pUd7LJZulbqblctKrb+GAJbknyg3PMuCSQDiBlrqgZ823jEAz6mD0PbrRS0bZYtcN24iFAoYMEa2pEgrJJHzHH8smJrrTsycaNtbFm3Zu27VsidzC2WZgWLLi4eVBmAJ4aJ81DdFf0ly263nLPcDFg6odrjlEdPlgbYHHzYmazy+I27aXHtoVUMFDq5Nxy6AhWG4eQMqnERsA64K/h3T3DYBtshY7mMy6tbcFIywh4tvPBG0HEEAokLaXwC3qF23HZH3fERtgtsEVgqsrGN5hR5gB8wJ6VrfDtMLdtFW58RQoAYndMYLbpJM5OSc9a84XX3LYQPbu7rRHw/iL8XYs7UKBVhmClgWLDLL0g1uPwz4yt8fDW2y/DWCSVnB2jy4aDyG2gGDxUzToIsLlKaVqyUphSs6KKxSmlKnvMEUsSAB1YwPqaGXPFVVfiMQFUkEAyTnETGIIPpImKALe2k2U63qrbztdTAnBEx3jtkZoLrvGLlsG4Le62JYyNpUAE5bIIIgiO/oaYgxsppSk/1a7QwBIZd0jIiAZ9oPNTqJE/vz7GkBAUppSrBWkEGYIMYMd+1AFbbSFKtFKaUoArFKQpVgpSFKAK2yk21Y2UhSgCuUppSrJSkKUAVilN2VZKU3ZQB85qasiy0FoMDn09SOR9e47ioxpyeIAEckD0kZyPbilRiARJE49+eR15r0GYktlJgDJ7Vctg7cR6yQPtnNWEt2yiG2fOoHlYDJ3ZYEAbliZDRGMt0t6jS3LY+IbbDcCrEgfMdwf4YGF+Q4P8A1YxWMpWaRRU01wA5APOKJWbwJwI/X+goPpELH6SeauI5UwRB9cVlkVm0Z0jRaa4YzRbS6y2uPmPZcmgGgQXfKwZSAYKyeZguPcgYjmimhdbU4gjBn5p4j3muHJH5N45Gz0b8Paw7BvASeFmW9z260bbUIF3FhETPpXm+m1jkEAw7jaDnyg+w+v2q9qPE42qSY2bY9hiPrRi9VkxR4JJ/BnPCpSuy34/4vb3gbWkTtuLkif5R1wSIODQjW6EeZyh3EF5wUI3SvwyzckkCDxgEiRIbV6v5lJBAgrMzzEdutXfAfF97W9PdRntqzecO4KAggnyZPIHPBPetcbcvxESXH8JDr7tvVfD2W0tBiQ24+W4zbmQhRBgNiZU/xAJ6gPq/CghO+6Ybau5bm8CYUqV5yAfMVCwqmQKJ39Dpn+JctsyIrHZtO5xBUbgSIfIDwDgHucVtXpFthdzW2S0NxZmKPc3OwUDapbBBUsADHlxDGt0yLAH/AAO47FbRBUAnzEIRIySpMzkCVnk9jRLwV20lzfeueXYUPwyV2sqLt3Ku1iw3RJBU9Tk1ob2qS9b+HZ0721VQxZSpt7VBQzIADBlPyxJEnih/h+ke8ys9v4zi3OWkM28tcLqMs0nEnaY5gGNOVkMOfh3VLeuqq2/mBL3LcXIMrKyyRBlJHK7OZreWETOyOSGIydw5DHuPWsD4f4FqjatC2yyd+8rtRlLuxc2nILIQAlvIkbRgQZ9C0WkFu2qKAABwOJ5P60uNiujitMcQCe1WCtRX3CiW4z+3bk/SpaKszuv1fxBCMVe2AzoQpw0gblPp5hntIOBWc8b0Nw27iKZVNgCjEm44OYHmhCq8mJg4AJtam2Ff4ibza3Ha0lGyZCgRuKlyOwhfYUC8Zu/DLb7jq+5NrGEBAeXCsFMKZXLYwRkg1EewZN4JqHtrdNxlK2/MEYszySVHw2BkrtERB6kk8UV1XjNt7YW7ba2sHG8lWyMBllohWxGcSRig2hX4rqQrr5rgVhLbCC07AjBS+2RxiBKkZWzq7dyFtOqjcDJuMoG3Y20nYCpJkxJMbYnoa8gFdNpLnw7bNdKjYVZJmBuG1mxAIBBIaMvyAMw6m5c0pFs3QVAJUBiDv3BpuDrxG2QPN1MUEvea9bSAAsS23eFtxK21QqokgZMySuH7XdVpPJcUM5E29zMisogAMxO1TuKECTIlsGDQ0KyIfizU3HgootbwC1o7nQbSxPPmI9iMRktjUfh/Xl5VgAIXaZHmIVdxUfMR1k96yGse4hts3w7rqssRG5bZcgOpDnavy9+RkzUui/ER+KSDcOwBUQICdoaAASAcwoJJg7oHQUON9BZ6MVppWhGi8f8AjXLaC0bYcM38TBIEfL0n5sc+XijpWoGQFabtqxtrttAysUpNtWdlN20AVylIUqxsppSgCuUpuyrJSm7KAPmZLvf704P36/T9qgipVQ5JBr0WkYoI29YEZWtyIA8p7jkTOVOfWit3xgXLVxCFAI3BIb5zjBk4AM5j5RjNB20BADAkqRPGZ9ACZX19D2pvw4TduHMbevcH2rJxi9lJsueFF98Lc2Ehhuz1U4PoePrRy7YIhiyXGLBcBiZEDybeQBHInPcms3anBicjGftitd4JqbaEk27ZRVLuGUMTlyPhn5vLuUCTJjJ4NYZfkuDK+m1b2yGJZOYZe8DG7mI6dPrXabVbm3H6e/erOt11rYrIgVZJKlWAcgbV7/D2jMbu2DWf0+ojislC10acqZr9JqwGHmhuhiRJjMzIPrVy8xcbkc7gRtBEyCYmRMcjkYHWstZ1BkEjjHH+3P61OmuZTuWCQDzkfbrWUsWzRT0aW5+GL1xiGQblUHaSATCg+RuOoXBiT05Gav6bY7IfiIYUkAgsoIk7vlmJzxz6TRbRfi3U3CQX3Ajd5fKykGZER9jK54oqrW9YtsXCCWaGIQLlQTDMzGFBz+vcUKThqRD30AtDrFFj4VtbpuM6MVK/EASVnbHmJKjJG3mOtF7dlAoa7be7b+Hue5bgtLlot3EwoAm2cjlRyGo3ovBbJYu9m2sEBYPxAVBOIOM94BiOCKur+HdKSItgAFiVloYsd2cxhjPB4Han7q6FwYI8LsW7jv8ABhLltQrK1tZa24OBcEKDkgQAPJjEmhdzQrpdQFFy+PiAyjOjl1UlyhRckMWJGYgGcTW+tae3bnYoUGMCYECBtHA+nNVtfpkuKVdVYEHkA8gjE8YJ+9JZd/kPhoqeA+P2L5Y2ARAljt2fMSYn82ZP1nqKMNrmH5jWI/DOhWxevWw7F1IkEodyEDYzBVEHn7+taZnpTfF/S9Ala2XT4k/836D+1DNd48d3wyWJTzkqFIECQGHJ5BiO1RPr7YO1mgyBB5kmAI9aH+MaZHt7hgkgA/IVAzCQAWJIkTI60KcvLYOK+C2ni14rFu4HJglrlvakkEAKJWYAkwSPXocX42hLG4EO45hgchZBcnsA0AwYgzxUz3UtyVgGQd5IYyAFwChgjEEREdIpdP4g0N/zDvG1VXIBIZ5YR5mBJgZ656naLfZDSIfDdTsC3w5AA8zbYDPsQkMVzyz9BwwBMRVXUeM3Llz4lyX2kBUgJ5k3cSS3O8yBPQnFQam8tzcRbKXBALW1BVmKz5lECSpyRLTmghtEm40YGGAUk+aApB6MSZHAE8dK2gr7M2HtNcW/cDzDdE3u535LQggCRvgcS+WArUaf8QBmllJ2hiQx2hk8qBSd38R54OZCtHcebDU3EgLb/iHAadxYYELkh1lekjBHAo34X45fFtbYXe5bZbaEdWbduYHcJI4zMAA9zVTxtoFI9Bta0XWX+A8BD5doQCYKod0ATDAzkbAZiKW/pLbq52qWWcbS7sg+QBtwLyIIaCDCnsaHv4i9sWWtnaGXefiEZKghpkTLTPMA7cAAg1j4sgcLtuqqq25CfhTuYbjtRoJ3HzEgAyvB5wu9Iqgz4b41bW5aRmJMnbu+dh8u9oUDA3Axjzc4JOyWCARwa8pYWt3wwkJkEzvYPJXbbG0koedqqFg++7efg5w1twrsyh/KrKFNsFRCYJmBHMEU6AN7aX4dSXHVcsQPf+lV28StjqT7KaNLsQ8pTSlR/wDFLcx5h6xj+9WbV5H+VgfSc/ajT6DogKU3ZVw26YbdDQ7KpSk2VZKU3ZSA+W9u1iXIJ6wQefzevX6mm3L0kR04JEGOk5/vTRcYkOzMT3JJbHrVm+262WCgAEAkAAE5yQPlMHpAMV6HkyLWl1ibt1xFYRAC+XjiYIJ4HPv7x65fIr7g24wO8CeRGKO6Pa6BtqFiqNjaxPALRyCscEj6TQnx3TfD+GoWA25uZngAx0x+9YRknKuimtDdJcI4BysEjmO/B7fYUV8Juqd2+5tgHaMmTHAAgCc5NVPw/pviW7iAqCShBK7jK7pgc/mH3NEb3hXwrfnJJHzADcgaSOemI7GSOlZ5HG2vI432V9R4t5IWMKVEhTtEQ22VIEjGD2oVpfMyrMSQPTJ5NXvEbNtbZZXzKiNvVpyrcEQjY7r71U8Jtb3MnaFUtPTHfIj6Z9KuKSi2htuwwmnOw3dytBIIEz7zAx7VXvOIBkdf/Ef5zUurRVgJcDfLkECCYwYJnk5OMdDiqGocbVhiHyHBiD1BEHPt7RUKNsq6EssVZGA3QZgAngkwR7CfvXpPgmjti2rkBiSrhlaVJgCdvG7AnnI9KxX4dcFwvxtlojzISqEnb2OGU5zzg8Vt7bqANsBeRtiM5kRjNY+o26LgGG1VKmsIoSb1J8auXgacjTWtaGwac7Vmk1MUR0+rnk0cWhWXmaqerYwdsgjM9D3GMz9O1Tbp61FeUlSBkwaAM/q9e1kpca2oO1txES2VIhtoJwBIgdOoFB7/AIsrqoS66kHdsgbVYEwQAOBxwMhe9XvENLcS4YLEvAgt5ZiOuII3ZGc/fO+JeGXLcOwW4FiEJk8Z2p2E8HqOM10Y4xl2ZybRT11xkYsHDHB6ZB4g8hu49KH3dYwG4MZacT8sRGeuJFTXr1wCHIWIYKB+cAbSViAYGZ7E55qjcndJ28TIaRLZ6k7TyTMcmu3HCjGTD3gviDNKG2zoJadhZujNMAAgwJBPHen6/U2/ii4iqvxFdXSG3K0A72D8EjcCeBtaJFDPAFYsSrwSZ2Zlo3ScZG1SxxyAccTe/GIK7WyGDECAWnygFd3WAWM9eeoqXFc6BP6QWzbXkOWZWJ80mTMkTzn7+9EdBbtPue4oW4ANlsQAGBC4CiZOCMQP1oVe8Nvp/wAwRA/MZ2iOgnPUY6j1zZ0uquaaCGSGktsi4IMYYHB6d4PrIq5J1SYkzYolwWwlxnQEAbUcMACzMHYT/wAuVb5Rjbyw8tLprQLF9tu4wYjep82ECrAZibhO7zZklp6Vmxd+P53c3NoJMgQVKyDLAcERAkghcNAIkS9bCqfIHHLIw3B+IHU4U/L/ADCsHjaRSkaS74yLtxVuAh7W4hnAyWJBgYn8ufQ4NEdH4xc2/wAIlWHAClVMNECSJ5An0PWsQbd+8twblZbUO2QSNxYkFj+YBoJx8sZirWiW8jWybigNtiGAEADDL5SzSR6mJzUvGkuyuR6EdVcJ3MSSeZyaeNceoqlp7+5ZO05IlTuGPXv6VzNWNF2Xxrh1pRqFPWhhamk0cRWaTQ+LMhhiWTt1Hsf6Uas+J2mwHAPZvL++KwG+nDUHvVptCaRvm8Stfzr+pqP/AIrZ/m/Rv7ViBqzTv9aKOTDijx21qCiBUQncOhIPzDkDkEiI/Wqdy2wUEggE9cCR3H1/eusXyklcEiPvzVrUa/4iMpkkndJOBkGAPv8AevR2mYFrQ7phSsATJDHyxLRE4g9uY9K7x8gPbgkygYgxgknEA4GBV7w8q9pUXb8SBJ6wsTHXIEYmZ6cgN4qjK4DEklZEyYEmFzzBkfSso7kV4Cnhls7H2b/nAlCGglM5GCDJHQc56Vrlhraq46MrjESRB4PfiIxFZzwO+tqxuYkBmaYBjAUdBkmO56Cr93xdZGwSCYOGGYJ8uM8R7z2rDLFyl0XF0gR+JoT4dsQSNzsQI+ZjtjtiRHoKqeGKpDblk8gzxGTjrPEY+vFVvFtX8W679MAey47DrJ460b/DDqoLbGYiRgDrwAZxMEZrZ/TAlbZHqimwMgZS+CMlMAAEEjPX71Q1F7fAKjcOSJ3GOTHEwIn0q/q9IWXehYCSShI8o6EGTyDJx1FV/wDSogl1J6gkGMgiCsSCGHcciRUxaobssWLqfEQWrSsWULLiCDGTAaJgmQBx0rX6UbRyvrtG1Z9qwOkVN2QUBMB5Mg9CPKZ4/WtjaYhRJkwDIyOOk9KyzLaRUGFviU0vVFL0UvxKx4lWXd9SpfjrQzdSh6OIWaDT6urgvA1l0u1atao96TgNSJ/GbgAAJUDqWEj3Hm8uPTrjNYPX6gB7jz5wOseYGIYHg57DvMVqvGnL2/zbB8xUqD28sj19uKyfiOh3XIQzCiT+aR8zHpgzx9u94Er2TMB3XY+bdI5zk+xx6RUBacxH6D7VoG8H3L5Z3xJESSpB3EYAgH9B1nFV7fwwqMgUgQLgYlcgMCwjymCBzgiffujNPSMnFkVm5ctsIEPPcA9JJGCynETj9ans6o37u+5cI2AncEACzAwAQB0Mk8juZqK/DOCGYsCCzkySTk5EyZgYPT61Q0up+GdwnduBHY+h65k9adWtdiCXit9i7YnMnbAncASZAHIMfU981rGt3SsKMyAwWJ5M8ZPfMYAilvWbjg3HIDEwcQQcwWAGFkbaGBjPvzxTjFNUDNC3iQDEOEgyrEHyZksVUSZMgg9IxwKj/wBI5uITuWSoDOpnAHyjqB03EdOlDUSAp5HBgR1GD6+sdq1ejClUthd3ysFuebYTA8sZPlzn+UDtUSah0NbK6aK4BC3GJYNG5WBUt5mA3MDJE9Mz7TNY8OuW7a3nIlY8qRIMggsVIAWSepifsviWkVLgZmwSF3OJUSYBXzchQDnnbmKMeELctzuKsGJO4HdwIzPt0JH9cJSdFJBvw9mW2oYGfVi8+u45qZnqsbw7imM9YcSrLDPTC9Vy9RNcqlEXIubqQvVE3KT4tPiLkXS9JvqkbtJ8SnxDkeZ6S1IJUyeqdSP+kcn6VabSRaLQATJB3ZgCY2jH3IP9b2g01tXXcAQB1crxkhedsyecT9i/xq7b+E3ww3m2yWgEEsAVgfMI4Y5rreS5JIhLRT8M0ZdVJUsu1oyV4bme2DkcdareMH+IARBCIGzuzEyT1MEZop4Np9toXAR5ZwSRM44BE8jPT6igWrvb7jv3Yx7DA/QCiLuT/Ifg1nglphat+XcIJ+jkn7/2qTUs1ss21UUKxY/mIEsqgRiTEnrVayxVVXsqj7ACovGtX/A2k5LBR6D5m+kD9aw4tzHejOWwSQOpP6mtN+GbfxLbgsQoeTBIPyjg9Mx34oL4JY33lHQSx/7eP1gfWin4YJ+G/wD6h/8AyK2y/hYRDJ8HVhJuP1OTIzAO3BORiM+9J/w+2XJMkn1I/wA7+4BqUXoXnrxUL3pM1yrkVotPERM+hA/8VyDE7lx06j/PSqgcdZpJ6zToLCDCDFdv71R3VILho4istB6XdVcNSq1Kgssh6er1VD07dSoLLz3TsMCT0HIPTIPSgmt0PxHLAS+0nzBh8pI4kdevUdeKJI1dbsI7ebIOIaGHtB9ycVFcXaKux2mm0h3sBwASWgKpO2M8mRnnPWcDLoW5uJVVO2VJxyMs0SJEH755ojr0DJt7kEg5EDYCDBJI49M9aznjfjYSbViMT5hnaWOQh6nMT09Tw8MXKVrsJOkBrpe07WgAzzC7QcTBAA9veJ+xJfAXRPikqzBZ2mNucASYk5PbIq5+HPBto+I4m4eAZBXOZP8AOc+oz60W8TdLgFtbgDFgNoknvHoZZYmK6Z5fq4r/AGQo6szNwLcAIRArCdqklgxIwTyxkgie0UP/ANNPcQMkjOSSP8/tWw8J8Ha1JBlD8w6EyIbgzjBz04maBeKbleBbCwzbSokFQWzHX0Pt2ojlTbUQcdWyrZtbQQcgRkAAd4yP+ritJ4Su9QCApCkbgPOZgg9dsf5xgTrtKU3bZdYOTjmCeMr7Hv60a8D0jC2jF5XJCQCFJJ4P9BSnJNWJKmWL/h6NEySIMmCSesz/AJxU9uEUKuAPrUjioyKzTGd8T3pGf1P2j+tI1MNMBzt2NKNQajpCKAJTfPYVwuVCGikLVQicvSbqgDU3dRQGZbxG2nl8zYMxET0if61U8T1lt0AQGSwJmOBPb6feg809fMQK6ljSdk2H9UrWtOu4RuVQuRk7ZmPQE+xx1oNprZZlUfmIX/3Hb/WpvEtWbrkz5V8q+w6/XmobdzawYflII9xn96Ippb7G6s2j6JsbZM7pBxG3+nr3rO+Pt5kTspYj1Ykfsv61e034gYIgIDMrckSdgiFnr1+woFrtW112dolj0wABiAOgrHFGfL6ipNVoNfhfTFvisCAQqjPqTP7CnfhlvI/oVP3GP2NUfCvEntBgnWSevAIn3Ak1e/CbDdcTqVDAYzsmRnr5h9jTnaUm+tAq0g5aslj1E/X+lR3tMwMY+mRU9y8kSjA+2f2x079Khhyu/Ydv80HaPrXNGV7G0ROD2pyWycVzXp6Cu+JxVCJWthDLEbQJJzAH6U+y4hoIIAkwQeDORP71WuhXBVuD9fqKjTRWoI2CTwTOKevIBP4BJ7fauNs/77h+3Sq3xQvGAMCuOrHEj71NMCd7TDt9CK4IagS9PGfbNSHcOQw9wRQMnCNToaKrfGABJIEcyY+/aguv/EEHbaAY9WOR/wBo6+5x704wcuhE34i8U+GnwlPnYeaD8qe/c8ekH0rvw94EVAuuvmwVHG3sSJ+b9vfgJo9Dc1LkyT/MzcD39ewH6Ct3prMALPAAk8mBEmtMjWOPGPfkFtj7GmvC4p3k2ycqYMH0PJH1xNFk0kfeeRyMVWVwIjpTjqjXG02zTosmwRxj7UJHhgDiSRLbo7nvPThePWrR1VNOqp8WForazwmR5VBwJnJPTmemM1LptIEUqCTmfb0GKU6qmtqapJk2iR7Z7VC6HsajbUUxr9UkxNocyHsaYR6VG12m/Fq0mIlI9Kax9Kj+LXNcpgLNITTDcpDcp0IeaXY38pqI3Kb8SnsAJ4Z4ZfZZ227aTl7tsyechYMiO8DNCfFbKBztvC6TMsE2LIwNuYI9hGKIajWanWNtAIUmNqyEz/OetHvCfwiikNc33DzgLsHuMlo9Y9qHn9r6ptJ/CKUeWl+4E8I8ALKLj3Vt9VBQOYjllJAHpPvWh0PgukRg0bmA/KGbp2LkTE+melaC3o4yNygdtgx7be09RUX+lGY3EHrClfrC/WvNyetnkvbX6G8cSiY7xx7KI23TbWmFYhbYBI5hDmOxrJqK1H4v1wZxZWCEMsYAlogCQBwCe3McihPhGg+NcCFtqgFnY8Kg5Pv0HqRXq+nfHHcv18nNPcqRb0S20073G373lAsDafzCWmQMZEdPY13gnh9wsl1VBVW6uEJwcqT25n0olsOuvqlsFdPbAAgRC8SAB8xiBPAFbO3ptiqqqNqjACnAA/8ATxjj27iub1HqnjVVt+PhGsIct+EUdBpbORcF4buNrW2iYwTuJHUYU1F4la+Ji3auR1Lv8RjHEHao+gkfajK24iVUCARC89cQMnnFIdOhbb/DM9JIM/8ApwenrxXnL1Mk7o29tGWOgugE7Gx6fSo/9K0AgTP8uevBj2rVnw5dwLLiT1b/AOXm+2JFcumsgflXMYckczg7jWv+a14F7K+TJOu2ScBeScAZjPbJA+opzKRgiJMCcSew9fStM2gDH5Q3/wCV5OeTI4x3pq+H2xJ+GJJnDAn7nmq/zo/H8C9gx2v0lxiGt3GtuBBhmUEc9OtVLTawKGfV3bYPRrl0EZgTmAfrW713hguCNmB3dhg9IBHpQ1Pw1Z4NlCR2MdYMyY/z0raH/oQrf9EvC70Zi34tqgYbxC4BEg/EZx26tH9cV1vx/VDnXwMTBLfby5+2K0d78NabMWj/AO8cfeoW/DukAJIgd/iCI9O9aL1mGXh/sg9qa8/czPjGv1V9Qbl03LaZWHlQRiYgSw6mMT0FCQCq7oxkDIyfbnj6Vsb2l0NtYQjcM7grXGA6k5254+tDzp7YLOmoTzZKup2kiCCWmO/WunHni1pNL9DKUHff3Lv4e0BRQ7PuP8itKrIHI/nijof0rP77ltS5FpWYfMjABs99sEcZnp9om8edMN5sTICsB6SprKUZSdj40aVnpjXKD2PxBaft2jcFP03RP3q9Z11p4AuQTwGgfrMUnBrtConL003KnfSOBMNHfpUDWj2oVCENymtcpSlMNunoBrXKYblTJpp6/SCZ9MCmX9K6YZSp7EQftzTVCGF6aXpNlcy1VALvppuU0pNLsp0IUPS7qYVpaKAWaSaSa7dToRTHjdq0RstEERzcZ4IngERTz+K9xnbcBPXese8be5J5oWunE4O5pOOOOxFW0ti2NzoobpOTHf8Ayaxljx+Vb/U0UpFltct6Q7vbGcgrJnvLZoUdabMrZuOo9VAOeTKkfrUep1xncB+mKH3LhY7iZNa48Xz18EymLs/6v0/3q7ovDXueRWEscgwPaDMnrj2oeKLeE3rls77eSO8kCa1m2l9PZMavZoNH4bb0w/jaVruQd07RuH8w3GBkYjMeppLer2sGTSQueXOf5SJHIxkZPWhuo8ZvN/zCsjoMfoMVT1Xi925lmnpP9jXLxyS/FRrzS6NPY8Qtxtu6FmBmXU3NxzwIUrA7RmBPUGjd8bUHyvftxyoWzj0UfDE/U+vpWfteL3VBC3GAPSTH60634iwMt5p/mz9h061Xs12v+/2LmadPHbe0b7+oaOUa3a83r8sYP1wK5vGdKok27r5kF0tiDzI24+vPrWb1WtVwPTsOffH7VXF8SMfvH2mksCfivt/A/cZuvDPxGlxtqpcHYkvt9ioYx16/Tmjg8SusvltKehJBHYGAMzjr0rznS+LX5CW22ify49+K2XhGufaAbiYH5gYPUyYGI/zpXB6n06jtL7tm+PJei26ahiTwOxkfbH/mnXlu7Y2+XPG/9GnPWrHx1PzKGwGJA3HPAXPHGc1AQ0lklZgHcEVexzBM4P8AtXIrfaRs6Ka6Zj5TbkMcncx5wMNMGSI/tSp4YjQuwtHIZAw6CJAzn609XZI88zmPIfrPw8z/AEqbT64twFYDnaY6CMdvp9q0bktolUBfFvB9RKqiKyiYDMwHXoQQDk/egh8HKGbtjZkiYLIY5kgjH2rcai0zZGz6IWA4yVgTwODTLSOoKwSGWPI0DjHkZyVBMCPWt8fqpRjWv7IljTZhbehKTsDkc7lVtpBHIIgDr96Y1lgQGDCehJyPT/8AXpWxuaFjkAJDQVIgER02EFcwQcRnFD9fYckgi5EGGQfEGeMng5IwciMV0x9RyZLhSBFjwcXYICkSQWAB6cSBmiNv8MLbU3EuMjKVGACp3GMq0j/zVTQ602WksSDHl95AmST0GSZrVDUrctlVGQQxAMzgjiM/4fSjJkyRkt6KjCLi9bB6KVEAkDtkUue5+9N1WqCLMH2BHXvzFD7Wvdj8v/uaP6VqrZzMJM7dzXG8ey/ahWp1bzyoz0mf3o/4e6bZKhj3Ike5zxQ9Agfq7rsjKm1CQQCB19zJX3GR0p+p1L3CC5mBA9PaizukxC/9gQj6bkmuZF6oSBnPvzA2ijkFALbT10rnhTHc4H3OKNWrVrd5hEem3+p+4j+tN1Fw3CYLQMDIgAdD9+pmnzDiANRbKCTHKrghsswXpPenvo7gztJHdYYfcTRM6OegPv8Avg07/hgM4+xj95/enzFxArWWHII9xFM2UbTQsDAux9/6GlNm7x5W9SAwP3E0+YcQGUPY0kUdVWEzbtnvCx+s0ouL/wDbH6f3pc/yDiZ27qrNtCtu1txO7cpPUDEETFA9XeNw9fuOAOBgdqZqfEN3+fvH+ftQ+7qSa0hirfkUpWLqHEwOlQTSTXCuhKjMkSrK3jwvlHYYqNEgSf3p9u6O1Q9lF/TMi5IBOeZOai1t/d2HtVN7hPFRNNSobsL8D1EmpWUgZUe8VWDEVZOtJXbA+36VTT8AiIH0q0rWyOIb6/rVLdSqabVhY+MwMUc8NVk+a4I7T/v3igJNOVyOP0qJw5KhqVGvv+POV2/EDqRGRtbHMsMz1xFX/D/EbjgB0ULxIkgcc+b9/SsCtwgzJotp/GCoAmY4ke3Xn8orlyelVUkaRyu9m+YIRPmYGATuKdyOI55z6TzSohUyLeOg2lo7ywJIjmcdorJ6bxF3YeX67WJg57gHv/ei1hnYiJz0CocnAJDPA6n6H0FcUsDjps6FkTC63lHMJgSqyc4EgQJx06VR02qV2Yq77hAWNwU7iZ3AsBJHSQcVVbU7PN/pnJBH5VBaeF3hm7dSMVVua9LnFg7gSIKsG6giduW6QP8Aw4YHvX8A5h74xSJug4yHlSeo2yDiAsQc98RVWw0blzIONrebIkeYk4IPEYmaEmLshb4AMg23xGZziAOOIHpwaGWtHdt3CWttu4DqYPEKDypDADHUYxWsMCp29kvJ+RoNTo7hG+27EKZ23CjwDIO4p9uRH6Ggr3UO821hYIKQkmYiAeOoz+9SpPw2bZL9WtqEkyR8pAByPzGYAiMTBcLSfNctvPDE2gw6HYTBBE4gYP0rRJ9OhN+S0mut3B/EVrUttJWdpPYg45PJ+vqO1Fi4h3rtu2x+e35gBHXquO9Q3nYOC1m2QQ3nVIbbBy8Y4Mkx1nkVEmtIeU8rAjcRuQ9AS24AQTnnEjPFbRx/BEmn2R3tVJ/w1qPAyGWPr1BoLa1Fu4f4ilTyXQgcj8445A9TPWZBXREqQcdYIyDAHf3GDRk6oXHyGH0qgiA33H/xqezp0mFc7hBwRMe08YOayn4j8SuKBsdwSY8oBkR6jy/aaj/B+qdrrvcLm5tVZYCSsnG7BPTBxgdhErG+HKybV0bF9AehJ+v7jrFQtoXAIMf0P170T/1OASH9Bt/aCaiXV2mO0ON3YyD9AayUmVSBqaVh3H1P7AxVtLbfzT6gE/fzVM+oQMELDcQSFxMLAJ+m4felfU21iWIPSAT+kZp2woaltj1GfaP2q2iGT0x0I/Y0+wqnqM5IiT9cf0qYKowDgcADt6CKlyHRWu2e5PuRJqE2ff7UQVR0ce3P7R/WnfDPefWf96OQ6Pn9mpgNdXV6qOUWnIK6upMCbcTSqtdXVLGOYioz7CurqEA0ik211dTAXbS11dQISurq6gDoq9oNKWIjb/3Z+sQZFdXVE+hx7NNo75t52n3CkIMj2ERn6fSpNRcuCWQK0CSNwdhHnBxjaYGekn2rq6uNpW2dK6KDfiBrbFHQoeDmYJOTnkggcfynNS6zxtmQf/UtEhTtZwyjJggye3fI6yRS11dCwQ06M+bAHxCw/hkkTjzEPEEw2cKCP0mr+k8WhQl7bcScbgSRPM+mOK6urSUUyVJjNRdVmYWiLbEkwzNsYGCIJwrSSeSpketS2bb5+I8cjO4rAOSfKZPMEDMjmMdXVD0kWiXUoymWKpvaAgB3TILM4mCREdYkVCbZ2gkkDkgkjJmCCZgQD3/aurqF0hlO/eKt+XHQZzJBE89Dj2ohoPEisbxKxwAJnjvIMT+v16uq5RTRMW7CV1g+2Jg9CMyJkd8Qc9fvRLwzSwTcESQFLZ4HQdD+ldXVyvop9mit2W2yNv1GfqDzTLuk+IIdVI9RP9YHvXV1YWUAtb+Hi9+0dzBERwIcghiwIgnOdzdeABxiiui8FW0PKCfVnk56k5Jrq6rnN0hcVYQW2QeW9sx69f8APSuf0Ygdg0/1/wA7V1dUDZDcvd2EdgP37fQUye26Pa5XV1UI/9k="
    },
]

let navbarComponentizado = [
    {
        "name":"Notícias",
        "href":"/noticias",
        "number":"1"
    },
    {
        "name":"Instagram",
        "href":"https://www.instagram.com/aruanda.capoeira/",
        "number":"2"
    },
    {
        "name":"Locais de Treino",
        "href":"/locais-treino",
        "number":"3"
    },
    {
        "name":"Conheça a nossa jornada",
        "href":"#jornada",
        "number":"4"
    },
    {
        "name":"Mestres da casa",
        "href":"#mestres",
        "number":"5"
    },
]

let cardBeneficios = [
    {
        "title":"Atende a todos os públicos e faixas etárias",
        "text":"Existem inúmeros profissionais especialistas em áreas específicas para o treinamento de capoeira: capoeira para crianças, capoeira para atletas, capoeira para a terceira idade, dentre outros.",
        "number":"1",

        "numeric":"2",
        "subtitle":"Ajuda a liberar o estresse",
        "textarea":"A capoeira serve de válvula de escape; é uma forma de liberar o estresse de uma forma lúdica e saudável."
    },

    {
        "title":"Trabalha todo o corpo",
        "text":"Em termos físicos, a capoeira é uma das atividades mais completas, por trabalhar todos os segmentos corporais e diversas posições em sua prática.",
        "number":"3",

        "numeric":"4",
        "subtitle":"Estimula o condicionamento cardiovascular e musculoesquelético",
        "textarea":"A capoeira é classificada como uma atividade física anaeróbica e predominantemente funcional, por estimular o condicionamento cardiovascular e musculoesquelético utilizando o peso do próprio corpo."
    },
    {
        "title":"Promove maior flexibilidade",
        "text":"Os movimentos de capoeira exigem e desenvolvem a flexibilidade no corpo, quase que como os movimentos de ioga.",
        "number":"5",

        "numeric":"6",
        "subtitle":"Promove maior coordenação",
        "textarea":"Os movimentos da capoeira, de forma geral, são guiados pela dança e pela música, o que faz com o que o corpo fique mais coordenado."
    },
    {
        "title":"Estimula a autoconfiança",
        "text":"Como a ideia é fazer os movimentos com fluidez em um período curto de tempo, a capoeira estimula a velocidade – o que fará que o corpo fique mais ágil para responder de volta aos movimentos de outras pessoas.",
        "number":"7",

        "numeric":"8",
        "subtitle":"Ajuda a liberar o estresse",
        "textarea":"A capoeira serve de válvula de escape; é uma forma de liberar o estresse de uma forma lúdica e saudável."
    },
]

let CarousselA = [
    {
        "title":"Mestre Paulo Renato",
        "description":"São Paulo - SP",
        "text":"Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        "src":"/paulo.png","href": "https://www.instagram.com/mestrepaulorenato/"
    },
    {
        "title":"Mestre Igor",
        "description":"Brasília - DF",
        "text":"Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        "src":"/igor.png","href": "https://www.instagram.com/mestrepaulorenato/"
    },
    {
        "title":"Mestra Michellinha",
        "description":"Brasília - DF",
        "text":"Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        "src":"/Michellinha.png",
        "href": "https://www.instagram.com/mestrepaulorenato/"
    },
]


let cardsMui = [
    {
        "height": "300px",
        "width":"500",
        "color":"",
        "image": "/EDB2017(2).jpg",
        "alt": "LycaTest",
        "title":"Sidoka",
        "button":"Mais informações",
        "text":"Lorem Ipsum is simply dummy text of the printing and typesetting industry.0Lorem Ipsum is simply dummy text of the printing and typesetting industry.0Lorem Ipsum is simply dummy text of the printing and typesetting industry.0"
    },
]

export default function App() {
  return (
    <div>
        <h3 className='texto'>Componente Navbar</h3>
        <p className='texto'>Exemplos</p>
        <NavbarComponent/>

        <h3 className='texto'>Componente Navbar</h3>
        <p className='texto'>Componentizado</p>
        <NavbarComponentizado link={navbarComponentizado} image="/LogoTrainee.svg"/>

        <h3 className='texto'>Componente Accordion</h3>
        <p className='texto'>Componentizado</p>
        <AccordionComponent link={accordion}/>

        <h3 className='texto'>Componente Breadcrumb</h3>
        <p className='texto'>Componentizado</p>
        <BreadcrumbComponent link={breadcrumb} typography="Pagina que vc está"/>

        <h3 className='texto'>Componente Buttons</h3>
        <p className='texto'>Exemplos</p>
        <ButtonComponents/>

        <h3 className='texto'>Componente Cards</h3>
        <p className='texto'>Componentizado</p>
        <div style={{display:"flex", justifyContent:"center"}}>
            <Cards link={cards} color="green" width="550"/>
        </div>

        <h3 className='texto'>Componente Cards Beneficios - Lista</h3>
        <p className='texto'>Componentizado</p>
        <CardBeneficios link={cardBeneficios}/>

        <h3 className='texto'>Componente Dropdown</h3>
        <p className='texto'>Componentizado</p>
        <div style={{display:"flex", justifyContent:"center"}}>
            <DropdownComponent title="Exemplo 1" link={dropdowns}/>
        </div>

        <h3 className='texto'>Componente Tabela</h3>
        <p className='texto'>Exemplos</p>
        <Tabelas/>

        <h3 className='texto'>Componente Caroussel Avatar</h3>
        <p className='texto'>Componentizado</p>
        <CarousselAvatar link={CarousselA}/>

        <h3 className='texto'>Componente Caroussel</h3>
        <p className='texto'>Componentizado</p>
        <CarouselComponent link={carroussel}/>

        <h3 className='texto'>Componente CardMui</h3>
        <p className='texto'>Componentizado</p>
        <CardMuiComponent link={cardsMui} />
    </div>
  );
}

