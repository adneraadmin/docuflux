import { useState } from 'react'
import { Button } from '@/components/ui/button.jsx'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Input } from '@/components/ui/input.jsx'
import { Label } from '@/components/ui/label.jsx'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import { 
  Clock, 
  Smartphone, 
  Brain, 
  Download, 
  CheckCircle, 
  Users, 
  Shield, 
  Zap,
  ArrowRight,
  Star,
  Play,
  Mail,
  Phone,
  MapPin
} from 'lucide-react'
import './App.css'

function App() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    industry: ''
  })

  const handleInputChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Beta-Anmeldung:', formData)
    // Hier würde die Anmeldung verarbeitet werden
    alert('Vielen Dank für Ihr Interesse! Wir melden uns in Kürze bei Ihnen.')
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Header - Mobile Optimiert */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-3 sm:py-4">
            <div className="flex items-center">
              <h1 className="text-2xl font-bold text-trust-blue">RechnungsAI</h1>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a href="#features" className="text-gray-600 hover:text-trust-blue transition-colors">Features</a>
              <a href="#benefits" className="text-gray-600 hover:text-trust-blue transition-colors">Vorteile</a>
              <a href="#pricing" className="text-gray-600 hover:text-trust-blue transition-colors">Preise</a>
              <a href="#faq" className="text-gray-600 hover:text-trust-blue transition-colors">FAQ</a>
            </nav>
            <Button className="bg-energy-orange hover:bg-orange-600 text-white">
              Beta testen
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex space-x-2 mb-6">
                <Badge className="bg-efficiency-green text-white">DSGVO-konform</Badge>
                <Badge className="bg-trust-blue text-white">Deutsche Server</Badge>
                <Badge className="bg-gray-100 text-gray-800">DATEV-Integration</Badge>
              </div>
              
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-trust-blue mb-4 sm:mb-6 leading-tight">
                5 Stunden mehr pro Woche für Ihr Kerngeschäft
              </h1>
              
              <p className="text-base sm:text-lg lg:text-xl text-gray-600 mb-6 sm:mb-8 leading-relaxed">
                RechnungsAI automatisiert Ihre Buchhaltung mit KI - DATEV-konform und DSGVO-sicher. 
                Perfekt für Freiberufler und Berater, die sich auf das Wesentliche konzentrieren möchten.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                <Button 
                  size="lg" 
                  className="bg-energy-orange hover:bg-orange-600 text-white px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg"
                  onClick={() => document.getElementById('beta-form').scrollIntoView({ behavior: 'smooth' })}
                >
                  Kostenlos Beta testen
                  <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
                </Button>
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="border-trust-blue text-trust-blue hover:bg-trust-blue hover:text-white px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg"
                >
                  <Play className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
                  Demo ansehen
                </Button>
              </div>
              
              <div className="flex items-center mt-8 text-sm text-gray-500">
                <CheckCircle className="h-4 w-4 text-efficiency-green mr-2" />
                Keine Kreditkarte erforderlich
                <CheckCircle className="h-4 w-4 text-efficiency-green mr-2 ml-6" />
                3 Monate kostenlos
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-white rounded-2xl shadow-2xl p-8 border border-gray-100">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-lg font-semibold text-gray-800">Beleg automatisch erfasst</h3>
                  <Badge className="bg-efficiency-green text-white">✓ Erkannt</Badge>
                </div>
                <div className="space-y-4">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Betrag:</span>
                    <span className="font-semibold">€ 127,50</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Datum:</span>
                    <span className="font-semibold">15.09.2025</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Kategorie:</span>
                    <span className="font-semibold">Büromaterial</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Projekt:</span>
                    <span className="font-semibold">Kunde ABC</span>
                  </div>
                </div>
                <Button className="w-full mt-6 bg-trust-blue hover:bg-blue-800 text-white">
                  <Download className="mr-2 h-4 w-4" />
                  DATEV-Export
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Kennen Sie das auch?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Als Berater oder Freiberufler verbringen Sie zu viel Zeit mit Buchhaltung statt mit Ihren Kunden.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center p-8 border-2 border-red-100 bg-red-50">
              <CardHeader>
                <Clock className="h-16 w-16 text-red-500 mx-auto mb-4" />
                <CardTitle className="text-xl text-gray-900">8-10 Stunden pro Woche</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Belege sortieren, erfassen und kategorisieren kostet Sie wertvolle Zeit, 
                  die Sie für Ihr Kerngeschäft brauchen.
                </p>
              </CardContent>
            </Card>
            
            <Card className="text-center p-8 border-2 border-red-100 bg-red-50">
              <CardHeader>
                <Users className="h-16 w-16 text-red-500 mx-auto mb-4" />
                <CardTitle className="text-xl text-gray-900">Projektbezogene Zuordnung</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Kosten verschiedenen Projekten und Kunden zuzuordnen ist mühsam 
                  und fehleranfällig - besonders bei mehreren Mandanten.
                </p>
              </CardContent>
            </Card>
            
            <Card className="text-center p-8 border-2 border-red-100 bg-red-50">
              <CardHeader>
                <Mail className="h-16 w-16 text-red-500 mx-auto mb-4" />
                <CardTitle className="text-xl text-gray-900">Steuerberater wartet</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Ihr Steuerberater braucht die Unterlagen, aber die Aufbereitung 
                  für DATEV kostet wieder Zeit und Nerven.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-trust-blue mb-4">So einfach geht moderne Buchhaltung</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Drei einfache Schritte - und Ihre Buchhaltung läuft automatisch.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-trust-blue rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
                <Smartphone className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">1. Belege fotografieren</h3>
              <p className="text-gray-600 text-lg">
                Einfach mit dem Smartphone abfotografieren - egal ob Rechnung, Quittung oder Tankbeleg.
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-efficiency-green rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
                <Brain className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">2. KI erkennt automatisch</h3>
              <p className="text-gray-600 text-lg">
                Unsere KI extrahiert alle relevanten Daten und ordnet sie automatisch dem richtigen Projekt zu.
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-energy-orange rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
                <Download className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">3. DATEV-Export mit einem Klick</h3>
              <p className="text-gray-600 text-lg">
                Perfekt formatierte DATEV-Dateien für Ihren Steuerberater - ohne manuelle Nacharbeit.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Ersparnisrechner für Berater */}
      <section className="py-16 sm:py-20 bg-gradient-to-br from-trust-blue to-blue-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-3 sm:mb-4">
              Wie viel können Sie sparen?
            </h2>
            <p className="text-base sm:text-lg lg:text-xl opacity-90">
              Berechnen Sie Ihre persönliche Zeitersparnis und den ROI mit RechnungsAI
            </p>
          </div>
          
          <Card className="bg-white text-gray-900 p-4 sm:p-6 lg:p-8">
            <CardContent>
              <div className="grid sm:grid-cols-2 gap-6 sm:gap-8">
                <div className="space-y-4 sm:space-y-6">
                  <h3 className="text-lg sm:text-xl font-bold text-trust-blue mb-4">Ihre aktuellen Werte:</h3>
                  
                  <div>
                    <Label className="text-sm font-medium">Belege pro Monat</Label>
                    <Input
                      type="number"
                      placeholder="z.B. 150"
                      className="mt-1"
                      id="belege-monat"
                    />
                  </div>
                  
                  <div>
                    <Label className="text-sm font-medium">Minuten pro Beleg (aktuell)</Label>
                    <Input
                      type="number"
                      placeholder="z.B. 8"
                      className="mt-1"
                      id="minuten-beleg"
                    />
                  </div>
                  
                  <div>
                    <Label className="text-sm font-medium">Ihr Stundensatz (€)</Label>
                    <Input
                      type="number"
                      placeholder="z.B. 120"
                      className="mt-1"
                      id="stundensatz"
                    />
                  </div>
                  
                  <Button 
                    className="w-full bg-energy-orange hover:bg-orange-600 text-white"
                    onClick={() => {
                      const belege = document.getElementById('belege-monat').value || 150;
                      const minuten = document.getElementById('minuten-beleg').value || 8;
                      const stundensatz = document.getElementById('stundensatz').value || 120;
                      
                      // Berechnungen
                      const aktuelleZeit = (belege * minuten) / 60; // Stunden pro Monat
                      const neueZeit = (belege * 1) / 60; // Mit RechnungsAI: 1 Min pro Beleg
                      const zeitersparnis = aktuelleZeit - neueZeit;
                      const geldersparnis = zeitersparnis * stundensatz;
                      const jahresersparnis = geldersparnis * 12;
                      
                      // Ergebnisse anzeigen
                      document.getElementById('zeit-aktuell').textContent = aktuelleZeit.toFixed(1);
                      document.getElementById('zeit-neu').textContent = neueZeit.toFixed(1);
                      document.getElementById('zeit-ersparnis').textContent = zeitersparnis.toFixed(1);
                      document.getElementById('geld-monat').textContent = geldersparnis.toFixed(0);
                      document.getElementById('geld-jahr').textContent = jahresersparnis.toFixed(0);
                      document.getElementById('roi-prozent').textContent = ((jahresersparnis / 1200) * 100).toFixed(0); // 100€/Monat Kosten
                    }}
                  >
                    Ersparnis berechnen
                  </Button>
                </div>
                
                <div className="bg-gradient-to-br from-efficiency-green to-green-600 text-white p-4 sm:p-6 rounded-lg">
                  <h3 className="text-lg sm:text-xl font-bold mb-4 sm:mb-6">Ihre Ersparnis:</h3>
                  
                  <div className="space-y-3 sm:space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-sm sm:text-base">Aktuell pro Monat:</span>
                      <span className="font-bold text-base sm:text-lg"><span id="zeit-aktuell">20.0</span>h</span>
                    </div>
                    
                    <div className="flex justify-between items-center">
                      <span className="text-sm sm:text-base">Mit RechnungsAI:</span>
                      <span className="font-bold text-base sm:text-lg"><span id="zeit-neu">2.5</span>h</span>
                    </div>
                    
                    <div className="border-t border-green-400 pt-3 sm:pt-4">
                      <div className="flex justify-between items-center mb-2">
                        <span className="font-semibold text-sm sm:text-base">Zeitersparnis:</span>
                        <span className="font-bold text-lg sm:text-xl"><span id="zeit-ersparnis">17.5</span>h</span>
                      </div>
                      
                      <div className="flex justify-between items-center mb-2">
                        <span className="font-semibold text-sm sm:text-base">Pro Monat:</span>
                        <span className="font-bold text-lg sm:text-xl">€<span id="geld-monat">2.100</span></span>
                      </div>
                      
                      <div className="flex justify-between items-center mb-4">
                        <span className="font-semibold text-sm sm:text-base">Pro Jahr:</span>
                        <span className="font-bold text-xl sm:text-2xl text-yellow-300">€<span id="geld-jahr">25.200</span></span>
                      </div>
                      
                      <div className="bg-white text-efficiency-green p-3 rounded text-center">
                        <div className="text-xs sm:text-sm font-medium">ROI nach 12 Monaten</div>
                        <div className="text-2xl sm:text-3xl font-bold"><span id="roi-prozent">2.100</span>%</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Benefits Section */}
      <section id="benefits" className="py-20 bg-gradient-to-br from-blue-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-trust-blue mb-4">Ihre Vorteile auf einen Blick</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Mehr Zeit, weniger Stress, professionellere Abläufe - das ist RechnungsAI.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center p-6 border-2 border-efficiency-green bg-green-50">
              <CardHeader>
                <Clock className="h-12 w-12 text-efficiency-green mx-auto mb-4" />
                <CardTitle className="text-lg text-gray-900">5h/Woche mehr Zeit</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Konzentrieren Sie sich auf Ihre Kunden statt auf Papierkram.
                </p>
              </CardContent>
            </Card>
            
            <Card className="text-center p-6 border-2 border-trust-blue bg-blue-50">
              <CardHeader>
                <Zap className="h-12 w-12 text-trust-blue mx-auto mb-4" />
                <CardTitle className="text-lg text-gray-900">Automatische Projektzuordnung</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  KI ordnet Belege automatisch den richtigen Projekten zu.
                </p>
              </CardContent>
            </Card>
            
            <Card className="text-center p-6 border-2 border-energy-orange bg-orange-50">
              <CardHeader>
                <Download className="h-12 w-12 text-energy-orange mx-auto mb-4" />
                <CardTitle className="text-lg text-gray-900">DATEV-konforme Exports</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Perfekt formatierte Dateien für Ihren Steuerberater.
                </p>
              </CardContent>
            </Card>
            
            <Card className="text-center p-6 border-2 border-gray-300 bg-gray-50">
              <CardHeader>
                <Smartphone className="h-12 w-12 text-gray-600 mx-auto mb-4" />
                <CardTitle className="text-lg text-gray-900">Mobile Belegerfassung</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Unterwegs Belege erfassen - einfach fotografieren und fertig.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Target Audience Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-trust-blue mb-4">Perfekt für Berater und Freiberufler</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              RechnungsAI wurde speziell für die Bedürfnisse von Beratungsunternehmen entwickelt.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="p-8 hover:shadow-lg transition-shadow">
              <CardHeader>
                <Users className="h-12 w-12 text-trust-blue mb-4" />
                <CardTitle className="text-xl text-gray-900">Unternehmensberater</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-efficiency-green mr-2" />
                    Projektbezogene Kostenzuordnung
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-efficiency-green mr-2" />
                    Mandanten-spezifische Auswertungen
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-efficiency-green mr-2" />
                    Reisekosten automatisch erfassen
                  </li>
                </ul>
              </CardContent>
            </Card>
            
            <Card className="p-8 hover:shadow-lg transition-shadow">
              <CardHeader>
                <Zap className="h-12 w-12 text-trust-blue mb-4" />
                <CardTitle className="text-xl text-gray-900">IT-Berater</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-efficiency-green mr-2" />
                    API-Integration in bestehende Tools
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-efficiency-green mr-2" />
                    Automatisierte Workflows
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-efficiency-green mr-2" />
                    Software-Lizenzen verwalten
                  </li>
                </ul>
              </CardContent>
            </Card>
            
            <Card className="p-8 hover:shadow-lg transition-shadow">
              <CardHeader>
                <Shield className="h-12 w-12 text-trust-blue mb-4" />
                <CardTitle className="text-xl text-gray-900">Steuerberater</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-efficiency-green mr-2" />
                    Mandanten sparen Zeit
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-efficiency-green mr-2" />
                    Perfekte DATEV-Integration
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-efficiency-green mr-2" />
                    Weniger Rückfragen nötig
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Social Proof Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-trust-blue mb-4">Das sagen unsere Beta-Tester</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Bereits über 50 Berater sparen Zeit mit RechnungsAI.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="p-6">
              <CardContent>
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 mb-4">
                  "RechnungsAI hat meine Buchhaltung revolutioniert. Ich spare wirklich 5 Stunden pro Woche 
                  und kann mich endlich wieder auf meine Kunden konzentrieren."
                </p>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-trust-blue rounded-full flex items-center justify-center text-white font-bold mr-3">
                    MS
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Michael Schmidt</p>
                    <p className="text-sm text-gray-600">Unternehmensberater, Hamburg</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="p-6">
              <CardContent>
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 mb-4">
                  "Die automatische Projektzuordnung ist genial. Endlich muss ich nicht mehr jeden Beleg 
                  manuell kategorisieren. Das spart enorm viel Zeit."
                </p>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-efficiency-green rounded-full flex items-center justify-center text-white font-bold mr-3">
                    AK
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Andrea Klein</p>
                    <p className="text-sm text-gray-600">IT-Beraterin, München</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="p-6">
              <CardContent>
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 mb-4">
                  "Meine Mandanten lieben RechnungsAI. Die DATEV-Integration funktioniert perfekt 
                  und ich bekomme viel sauberere Daten als früher."
                </p>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-energy-orange rounded-full flex items-center justify-center text-white font-bold mr-3">
                    TW
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Thomas Weber</p>
                    <p className="text-sm text-gray-600">Steuerberater, Berlin</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Beta CTA Section */}
      <section id="beta-form" className="py-20 bg-gradient-to-br from-trust-blue to-blue-800 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Starten Sie jetzt Ihre 3-monatige Beta-Phase</h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Testen Sie RechnungsAI kostenlos und unverbindlich. Keine Kreditkarte erforderlich.
            </p>
          </div>
          
          <Card className="max-w-2xl mx-auto">
            <CardHeader>
              <CardTitle className="text-2xl text-center text-gray-900">Beta-Zugang sichern</CardTitle>
              <CardDescription className="text-center">
                Füllen Sie das Formular aus und wir melden uns innerhalb von 24 Stunden bei Ihnen.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="name">Vor- und Nachname *</Label>
                    <Input
                      id="name"
                      type="text"
                      value={formData.name}
                      onChange={(e) => handleInputChange('name', e.target.value)}
                      required
                      className="mt-1"
                      placeholder="Max Mustermann"
                    />
                  </div>
                  <div>
                    <Label htmlFor="email">E-Mail-Adresse *</Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                      required
                      className="mt-1"
                      placeholder="max@mustermann.de"
                    />
                  </div>
                </div>
                
                <div>
                  <Label htmlFor="company">Unternehmen</Label>
                  <Input
                    id="company"
                    type="text"
                    value={formData.company}
                    onChange={(e) => handleInputChange('company', e.target.value)}
                    className="mt-1"
                    placeholder="Mustermann Consulting GmbH"
                  />
                </div>
                
                <div>
                  <Label htmlFor="industry">Branche *</Label>
                  <Select onValueChange={(value) => handleInputChange('industry', value)}>
                    <SelectTrigger className="mt-1">
                      <SelectValue placeholder="Wählen Sie Ihre Branche" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="unternehmensberatung">Unternehmensberatung</SelectItem>
                      <SelectItem value="it-beratung">IT-Beratung</SelectItem>
                      <SelectItem value="steuerberatung">Steuerberatung</SelectItem>
                      <SelectItem value="rechtsberatung">Rechtsberatung</SelectItem>
                      <SelectItem value="marketing">Marketing & Werbung</SelectItem>
                      <SelectItem value="design">Design & Kreativ</SelectItem>
                      <SelectItem value="andere">Andere</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <Button 
                  type="submit" 
                  size="lg" 
                  className="w-full bg-energy-orange hover:bg-orange-600 text-white py-4 text-lg"
                >
                  Jetzt Beta-Zugang sichern
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                
                <div className="text-center text-sm text-gray-500">
                  <CheckCircle className="h-4 w-4 text-efficiency-green inline mr-1" />
                  Keine Kreditkarte erforderlich
                  <CheckCircle className="h-4 w-4 text-efficiency-green inline mr-1 ml-4" />
                  Jederzeit kündbar
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-2xl font-bold text-white mb-4">RechnungsAI</h3>
              <p className="text-gray-400 mb-4">
                KI-gestützte Buchhaltung für Freiberufler und Berater. 
                DSGVO-konform und DATEV-kompatibel.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-white">LinkedIn</a>
                <a href="#" className="text-gray-400 hover:text-white">YouTube</a>
              </div>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Produkt</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white">Features</a></li>
                <li><a href="#" className="hover:text-white">Preise</a></li>
                <li><a href="#" className="hover:text-white">DATEV-Integration</a></li>
                <li><a href="#" className="hover:text-white">Mobile App</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Support</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white">Hilfe-Center</a></li>
                <li><a href="#" className="hover:text-white">Kontakt</a></li>
                <li><a href="#" className="hover:text-white">API-Dokumentation</a></li>
                <li><a href="#" className="hover:text-white">Status</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Kontakt</h4>
              <ul className="space-y-2 text-gray-400">
                <li className="flex items-center">
                  <Mail className="h-4 w-4 mr-2" />
                  hello@rechnungsai.de
                </li>
                <li className="flex items-center">
                  <Phone className="h-4 w-4 mr-2" />
                  +49 (0) 30 12345678
                </li>
                <li className="flex items-center">
                  <MapPin className="h-4 w-4 mr-2" />
                  Berlin, Deutschland
                </li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2025 RechnungsAI. Alle Rechte vorbehalten.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-white text-sm">Impressum</a>
              <a href="#" className="text-gray-400 hover:text-white text-sm">Datenschutz</a>
              <a href="#" className="text-gray-400 hover:text-white text-sm">AGB</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
