import EmblaCarousel from 'embla-carousel'
import AutoScroll from 'embla-carousel-auto-scroll'
import '../styles/embla.css'

const OPTIONS = { loop: true }

const emblaNode = document.querySelector('.embla')
const viewportNode = emblaNode.querySelector('.embla__viewport')

const emblaApi = EmblaCarousel(viewportNode, OPTIONS, [AutoScroll({speed: 0.5})])

emblaApi?.plugins?.autoscroll.play()