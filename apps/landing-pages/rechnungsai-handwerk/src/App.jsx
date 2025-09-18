import { useState } from 'react'
import { Button } from '@/components/ui/button.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Input } from '@/components/ui/input.jsx'
import { Label } from '@/components/ui/label.jsx'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select.jsx'
import { 
  Camera, 
  Brain, 
  Download, 
  Clock, 
  Users, 
  Mail, 
  CheckCircle, 
  Star,
  Wrench,
  Zap,
  Shield,
  ArrowRight,
  Play,
  Phone,
  MapPin,
  Menu,
  X
} from 'lucide-react'
import './App.css'

function App() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    trade: ''
  })

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const handleInputChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Beta-Anmeldung:', formData)
    // Hier würde die Formular-Submission implementiert werden
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation - Mobile Optimiert */}
      <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-14 sm:h-16">
            <div className="flex items-center space-x-2">
              <Wrench className="h-8 w-8 text-handwerk-orange" />
              <span className="text-xl font-bold text-trust-blue">RechnungsAI</span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#vorteile" className="text-gray-600 hover:text-trust-blue transition-colors">Vorteile</a>
              <a href="#handwerk" className="text-gray-600 hover:text-trust-blue transition-colors">Für Ihr Handwerk</a>
              <a href="#erfahrungen" className="text-gray-600 hover:text-trust-blue transition-colors">Erfahrungen</a>
              <Button className="bg-handwerk-orange hover:bg-handwerk-orange-hover text-white">
                Jetzt testen
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section - Mobile Optimiert */}
      <section className="relative py-12 sm:py-16 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 handwerk-gradient opacity-5"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div>
              <div className="flex flex-wrap items-center gap-2 mb-4 sm:mb-6">
                <Badge className="bg-efficiency-green text-white text-xs sm:text-sm">GOBD-konform</Badge>
                <Badge className="bg-trust-blue text-white text-xs sm:text-sm">Made in Germany</Badge>
                <Badge className="bg-handwerk-orange text-white text-xs sm:text-sm">Von Handwerkern empfohlen</Badge>
              </div>
              
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-bold text-gray-900 mb-4 sm:mb-6 leading-tight">
                Endlich <span className="text-handwerk-orange">Feierabend!</span><br />
                Weniger Bürokram für Handwerker
              </h1>
              
              <p className="text-base sm:text-lg lg:text-xl text-gray-600 mb-6 sm:mb-8 leading-relaxed">
                RechnungsAI ist die digitale Werkzeugkiste für Ihre Buchhaltung. 
                Einfach Belege fotografieren, KI erkennt alles automatisch. 
                Schneller bezahlt werden, weniger Papierkram.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-6 sm:mb-8">
                <Button 
                  size="lg" 
                  className="bg-handwerk-orange hover:bg-handwerk-orange-hover text-white text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 w-full sm:w-auto"
                >
                  <Camera className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
                  Jetzt kostenlos testen
                </Button>
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="border-trust-blue text-trust-blue hover:bg-trust-blue hover:text-white text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 w-full sm:w-auto"
                >
                  <Play className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
                  Demo ansehen
                </Button>
              </div>
              
              <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-6 text-xs sm:text-sm text-gray-500">
                <div className="flex items-center">
                  <CheckCircle className="h-3 w-3 sm:h-4 sm:w-4 text-efficiency-green mr-2" />
                  Keine Installation nötig
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-3 w-3 sm:h-4 sm:w-4 text-efficiency-green mr-2" />
                  30 Tage kostenlos
                </div>
              </div>
            </div>
            
            <div className="relative mt-8 lg:mt-0">
              <Card className="bg-white shadow-2xl border-0 overflow-hidden max-w-md mx-auto lg:max-w-none">
                <CardHeader className="bg-gradient-to-r from-handwerk-orange to-trust-blue text-white">
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-base sm:text-lg">Beleg automatisch erfasst</CardTitle>
                    <Badge className="bg-efficiency-green text-white text-xs sm:text-sm">
                      <CheckCircle className="h-3 w-3 sm:h-4 sm:w-4 mr-1" />
                      Erkannt
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent className="p-4 sm:p-6 space-y-3 sm:space-y-4">
                  <div className="flex justify-between text-sm sm:text-base">
                    <span className="font-medium">Betrag:</span>
                    <span className="font-bold text-handwerk-orange">€ 89,50</span>
                  </div>
                  <div className="flex justify-between text-sm sm:text-base">
                    <span className="font-medium">Datum:</span>
                    <span>17.09.2025</span>
                  </div>
                  <div className="flex justify-between text-sm sm:text-base">
                    <span className="font-medium">Kategorie:</span>
                    <span>Werkzeug & Material</span>
                  </div>
                  <div className="flex justify-between text-sm sm:text-base">
                    <span className="font-medium">Baustelle:</span>
                    <span>Familie Müller - Bad</span>
                  </div>
                  <Button className="w-full bg-trust-blue hover:bg-trust-blue-hover text-white text-sm sm:text-base">
                    <Download className="mr-2 h-3 w-3 sm:h-4 sm:w-4" />
                    GOBD-Export
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Section - Mobile Optimiert */}
      <section className="py-12 sm:py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">
              Kennen Sie das auch?
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto">
              Als Handwerker haben Sie besseres zu tun, als Zettel zu sortieren und Rechnungen zu tippen.
            </p>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            <Card className="text-center p-4 sm:p-6 border-0 shadow-lg">
              <div className="bg-red-100 w-12 h-12 sm:w-16 sm:h-16 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                <Clock className="h-6 w-6 sm:h-8 sm:w-8 text-red-600" />
              </div>
              <CardTitle className="text-lg sm:text-xl mb-2 sm:mb-3">Zettelwirtschaft</CardTitle>
              <CardDescription className="text-gray-600">
                Stundenzettel und Materialscheine gehen verloren oder sind unleserlich. 
                Die Suche kostet wertvolle Zeit.
              </CardDescription>
            </Card>
            
            <Card className="text-center p-6 border-0 shadow-lg">
              <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-red-600" />
              </div>
              <CardTitle className="text-xl mb-3">Späte Rechnungen</CardTitle>
              <CardDescription className="text-gray-600">
                Weil die Belege fehlen, werden Rechnungen erst Wochen später geschrieben. 
                Das Geld kommt zu spät.
              </CardDescription>
            </Card>
            
            <Card className="text-center p-6 border-0 shadow-lg">
              <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail className="h-8 w-8 text-red-600" />
              </div>
              <CardTitle className="text-xl mb-3">Steuerberater-Chaos</CardTitle>
              <CardDescription className="text-gray-600">
                Am Quartalsende müssen Kisten voller Belege sortiert werden. 
                Ihr Steuerberater wartet.
              </CardDescription>
            </Card>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              So einfach funktioniert's
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Drei einfache Schritte - und Ihre Buchhaltung läuft automatisch.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-handwerk-orange w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Camera className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3">1. Belege fotografieren</h3>
              <p className="text-gray-600">
                Einfach mit dem Smartphone abfotografieren - egal ob Rechnung, 
                Quittung oder Lieferschein. Funktioniert auch unterwegs.
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-efficiency-green w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Brain className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3">2. KI erkennt automatisch</h3>
              <p className="text-gray-600">
                Unsere KI extrahiert alle wichtigen Daten und ordnet sie automatisch 
                der richtigen Baustelle zu. Ohne Nacharbeit.
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-trust-blue w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Download className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3">3. GOBD-Export mit einem Klick</h3>
              <p className="text-gray-600">
                Perfekt formatierte GOBD-konforme Dateien für Ihren Steuerberater - 
                ohne manuelle Nacharbeit.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Ersparnisrechner für Handwerker */}
      <section className="py-12 sm:py-16 bg-gradient-to-br from-handwerk-orange to-orange-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-3 sm:mb-4">
              Wie viel Zeit sparen Sie?
            </h2>
            <p className="text-base sm:text-lg lg:text-xl opacity-90">
              Berechnen Sie, wie viel früher Sie Feierabend haben können
            </p>
          </div>
          
          <Card className="bg-white text-gray-900 p-4 sm:p-6 lg:p-8">
            <CardContent>
              <div className="grid sm:grid-cols-2 gap-6 sm:gap-8">
                <div className="space-y-4 sm:space-y-6">
                  <h3 className="text-lg sm:text-xl font-bold text-handwerk-orange mb-4">Ihre Situation:</h3>
                  
                  <div>
                    <Label className="text-sm font-medium">Belege pro Monat</Label>
                    <Input
                      type="number"
                      placeholder="z.B. 80"
                      className="mt-1"
                      id="handwerk-belege"
                    />
                  </div>
                  
                  <div>
                    <Label className="text-sm font-medium">Minuten pro Beleg (jetzt)</Label>
                    <Input
                      type="number"
                      placeholder="z.B. 12"
                      className="mt-1"
                      id="handwerk-minuten"
                    />
                  </div>
                  
                  <div>
                    <Label className="text-sm font-medium">Baustellen pro Monat</Label>
                    <Input
                      type="number"
                      placeholder="z.B. 15"
                      className="mt-1"
                      id="handwerk-baustellen"
                    />
                  </div>
                  
                  <div>
                    <Label className="text-sm font-medium">Stunden für Rechnungen schreiben</Label>
                    <Input
                      type="number"
                      placeholder="z.B. 8"
                      className="mt-1"
                      id="handwerk-rechnungen"
                    />
                  </div>
                  
                  <Button 
                    className="w-full bg-trust-blue hover:bg-blue-700 text-white"
                    onClick={() => {
                      const belege = document.getElementById('handwerk-belege').value || 80;
                      const minuten = document.getElementById('handwerk-minuten').value || 12;
                      const baustellen = document.getElementById('handwerk-baustellen').value || 15;
                      const rechnungStunden = document.getElementById('handwerk-rechnungen').value || 8;
                      
                      // Berechnungen für Handwerker
                      const aktuelleZeitBelege = (belege * minuten) / 60; // Stunden pro Monat für Belege
                      const aktuelleZeitGesamt = aktuelleZeitBelege + parseFloat(rechnungStunden);
                      const neueZeitBelege = (belege * 1) / 60; // Mit RechnungsAI: 1 Min pro Beleg
                      const neueZeitRechnungen = baustellen * 0.5; // 30 Min pro Rechnung statt 2h
                      const neueZeitGesamt = neueZeitBelege + neueZeitRechnungen;
                      const zeitersparnis = aktuelleZeitGesamt - neueZeitGesamt;
                      const tageErsparnis = zeitersparnis / 8; // 8h Arbeitstag
                      const wochenErsparnis = zeitersparnis / 4; // Pro Woche
                      
                      // Ergebnisse anzeigen
                      document.getElementById('handwerk-zeit-aktuell').textContent = aktuelleZeitGesamt.toFixed(1);
                      document.getElementById('handwerk-zeit-neu').textContent = neueZeitGesamt.toFixed(1);
                      document.getElementById('handwerk-zeit-ersparnis').textContent = zeitersparnis.toFixed(1);
                      document.getElementById('handwerk-tage-ersparnis').textContent = tageErsparnis.toFixed(1);
                      document.getElementById('handwerk-wochen-ersparnis').textContent = wochenErsparnis.toFixed(1);
                      document.getElementById('handwerk-fruher-feierabend').textContent = Math.floor(zeitersparnis / 4.3); // Pro Woche
                    }}
                  >
                    Zeit berechnen
                  </Button>
                </div>
                
                <div className="bg-gradient-to-br from-efficiency-green to-green-600 text-white p-4 sm:p-6 rounded-lg">
                  <h3 className="text-lg sm:text-xl font-bold mb-4 sm:mb-6">Ihre Zeitersparnis:</h3>
                  
                  <div className="space-y-3 sm:space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-sm sm:text-base">Büroarbeit aktuell:</span>
                      <span className="font-bold text-base sm:text-lg"><span id="handwerk-zeit-aktuell">24.0</span>h</span>
                    </div>
                    
                    <div className="flex justify-between items-center">
                      <span className="text-sm sm:text-base">Mit RechnungsAI:</span>
                      <span className="font-bold text-base sm:text-lg"><span id="handwerk-zeit-neu">8.8</span>h</span>
                    </div>
                    
                    <div className="border-t border-green-400 pt-3 sm:pt-4">
                      <div className="flex justify-between items-center mb-2">
                        <span className="font-semibold text-sm sm:text-base">Ersparnis pro Monat:</span>
                        <span className="font-bold text-lg sm:text-xl"><span id="handwerk-zeit-ersparnis">15.2</span>h</span>
                      </div>
                      
                      <div className="flex justify-between items-center mb-2">
                        <span className="font-semibold text-sm sm:text-base">Das sind:</span>
                        <span className="font-bold text-lg sm:text-xl"><span id="handwerk-tage-ersparnis">1.9</span> Arbeitstage</span>
                      </div>
                      
                      <div className="flex justify-between items-center mb-4">
                        <span className="font-semibold text-sm sm:text-base">Pro Woche:</span>
                        <span className="font-bold text-lg sm:text-xl"><span id="handwerk-wochen-ersparnis">3.8</span>h weniger</span>
                      </div>
                      
                      <div className="bg-white text-efficiency-green p-3 rounded text-center">
                        <div className="text-xs sm:text-sm font-medium">Früher Feierabend</div>
                        <div className="text-xl sm:text-2xl font-bold"><span id="handwerk-fruher-feierabend">3</span>x pro Monat</div>
                        <div className="text-xs opacity-80">1 Stunde früher</div>
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
      <section id="vorteile" className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Ihre Vorteile auf einen Blick
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Mehr Zeit, weniger Stress, schnellere Zahlungen - das ist RechnungsAI.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="p-6 border-0 shadow-lg hover:shadow-xl transition-shadow">
              <div className="bg-efficiency-green/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <Clock className="h-6 w-6 text-efficiency-green" />
              </div>
              <CardTitle className="text-lg mb-2">2 Wochen früher bezahlt</CardTitle>
              <CardDescription>
                Rechnungen schneller schreiben bedeutet schnellere Zahlungseingänge.
              </CardDescription>
            </Card>
            
            <Card className="p-6 border-0 shadow-lg hover:shadow-xl transition-shadow">
              <div className="bg-handwerk-orange/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <Zap className="h-6 w-6 text-handwerk-orange" />
              </div>
              <CardTitle className="text-lg mb-2">Automatische Zuordnung</CardTitle>
              <CardDescription>
                KI ordnet Belege automatisch den richtigen Baustellen zu.
              </CardDescription>
            </Card>
            
            <Card className="p-6 border-0 shadow-lg hover:shadow-xl transition-shadow">
              <div className="bg-trust-blue/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <Shield className="h-6 w-6 text-trust-blue" />
              </div>
              <CardTitle className="text-lg mb-2">GOBD-konforme Exports</CardTitle>
              <CardDescription>
                Perfekt formatierte Dateien für Ihren Steuerberater.
              </CardDescription>
            </Card>
            
            <Card className="p-6 border-0 shadow-lg hover:shadow-xl transition-shadow">
              <div className="bg-efficiency-green/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <Camera className="h-6 w-6 text-efficiency-green" />
              </div>
              <CardTitle className="text-lg mb-2">Mobile Belegerfassung</CardTitle>
              <CardDescription>
                Unterwegs Belege erfassen - einfach fotografieren und fertig.
              </CardDescription>
            </Card>
          </div>
        </div>
      </section>

      {/* Target Groups Section */}
      <section id="handwerk" className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Für Macher wie Sie
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              RechnungsAI wurde speziell für die Bedürfnisse von Handwerksbetrieben entwickelt.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-6 border-0 shadow-lg">
              <div className="bg-handwerk-orange/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <Wrench className="h-6 w-6 text-handwerk-orange" />
              </div>
              <CardTitle className="text-xl mb-4">SHK-Handwerk</CardTitle>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-efficiency-green mr-2 flex-shrink-0" />
                  Materialkosten pro Baustelle
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-efficiency-green mr-2 flex-shrink-0" />
                  Stundenzettel automatisch erfassen
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-efficiency-green mr-2 flex-shrink-0" />
                  Wartungsverträge verwalten
                </li>
              </ul>
            </Card>
            
            <Card className="p-6 border-0 shadow-lg">
              <div className="bg-trust-blue/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <Zap className="h-6 w-6 text-trust-blue" />
              </div>
              <CardTitle className="text-xl mb-4">Elektro-Handwerk</CardTitle>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-efficiency-green mr-2 flex-shrink-0" />
                  Kabelmengen automatisch berechnen
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-efficiency-green mr-2 flex-shrink-0" />
                  Prüfprotokolle digitalisieren
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-efficiency-green mr-2 flex-shrink-0" />
                  Notdienst-Abrechnungen
                </li>
              </ul>
            </Card>
            
            <Card className="p-6 border-0 shadow-lg">
              <div className="bg-efficiency-green/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <Shield className="h-6 w-6 text-efficiency-green" />
              </div>
              <CardTitle className="text-xl mb-4">Bau-Handwerk</CardTitle>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-efficiency-green mr-2 flex-shrink-0" />
                  Materiallieferungen zuordnen
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-efficiency-green mr-2 flex-shrink-0" />
                  Subunternehmer-Rechnungen
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-efficiency-green mr-2 flex-shrink-0" />
                  Abschlagsrechnungen erstellen
                </li>
              </ul>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="erfahrungen" className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Das sagen unsere Handwerker
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Bereits über 200 Handwerksbetriebe sparen Zeit mit RechnungsAI.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-6 border-0 shadow-lg">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <blockquote className="text-gray-700 mb-4">
                "Endlich kann ich mich wieder aufs Handwerk konzentrieren. 
                Die Zettelwirtschaft ist Geschichte - RechnungsAI macht alles automatisch."
              </blockquote>
              <div className="flex items-center">
                <div className="bg-handwerk-orange text-white rounded-full w-10 h-10 flex items-center justify-center font-bold mr-3">
                  MS
                </div>
                <div>
                  <div className="font-semibold">Meister Schmidt</div>
                  <div className="text-sm text-gray-500">SHK-Betrieb, Köln</div>
                </div>
              </div>
            </Card>
            
            <Card className="p-6 border-0 shadow-lg">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <blockquote className="text-gray-700 mb-4">
                "Meine Rechnungen gehen jetzt 2 Wochen früher raus. 
                Das verbessert meine Liquidität enorm. Kann ich nur empfehlen!"
              </blockquote>
              <div className="flex items-center">
                <div className="bg-trust-blue text-white rounded-full w-10 h-10 flex items-center justify-center font-bold mr-3">
                  AW
                </div>
                <div>
                  <div className="font-semibold">Andreas Weber</div>
                  <div className="text-sm text-gray-500">Elektro-Meister, München</div>
                </div>
              </div>
            </Card>
            
            <Card className="p-6 border-0 shadow-lg">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <blockquote className="text-gray-700 mb-4">
                "Mein Steuerberater ist begeistert! Keine Schuhkartons mehr, 
                alles digital und GOBD-konform. Spart uns beiden viel Zeit."
              </blockquote>
              <div className="flex items-center">
                <div className="bg-efficiency-green text-white rounded-full w-10 h-10 flex items-center justify-center font-bold mr-3">
                  TK
                </div>
                <div>
                  <div className="font-semibold">Thomas Klein</div>
                  <div className="text-sm text-gray-500">Malermeister, Hamburg</div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section - Mobile Optimiert */}
      <section className="py-12 sm:py-16 lg:py-20 handwerk-gradient text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6">
            Starten Sie jetzt Ihre 30-tägige Testphase
          </h2>
          <p className="text-base sm:text-lg lg:text-xl mb-6 sm:mb-8 opacity-90">
            Testen Sie RechnungsAI kostenlos und unverbindlich. 
            Keine Installation nötig, funktioniert auf jedem Smartphone.
          </p>
          
          <Card className="bg-white text-gray-900 p-4 sm:p-6 lg:p-8 max-w-md mx-auto">
            <CardHeader className="text-center pb-4 sm:pb-6">
              <CardTitle className="text-xl sm:text-2xl text-trust-blue">Kostenlos testen</CardTitle>
              <CardDescription className="text-sm sm:text-base">
                Füllen Sie das Formular aus und wir melden uns innerhalb von 24 Stunden bei Ihnen.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <Label htmlFor="name">Vor- und Nachname *</Label>
                  <Input
                    id="name"
                    placeholder="Max Mustermann"
                    value={formData.name}
                    onChange={(e) => handleInputChange('name', e.target.value)}
                    required
                  />
                </div>
                
                <div>
                  <Label htmlFor="email">E-Mail-Adresse *</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="max@mustermann-shk.de"
                    value={formData.email}
                    onChange={(e) => handleInputChange('email', e.target.value)}
                    required
                  />
                </div>
                
                <div>
                  <Label htmlFor="company">Betrieb</Label>
                  <Input
                    id="company"
                    placeholder="Mustermann SHK GmbH"
                    value={formData.company}
                    onChange={(e) => handleInputChange('company', e.target.value)}
                  />
                </div>
                
                <div>
                  <Label htmlFor="trade">Gewerk *</Label>
                  <Select onValueChange={(value) => handleInputChange('trade', value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Wählen Sie Ihr Gewerk" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="shk">SHK (Sanitär, Heizung, Klima)</SelectItem>
                      <SelectItem value="elektro">Elektro-Handwerk</SelectItem>
                      <SelectItem value="bau">Bau-Handwerk</SelectItem>
                      <SelectItem value="maler">Maler & Lackierer</SelectItem>
                      <SelectItem value="tischler">Tischler & Schreiner</SelectItem>
                      <SelectItem value="dach">Dachdecker</SelectItem>
                      <SelectItem value="andere">Andere</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <Button 
                  type="submit" 
                  className="w-full bg-handwerk-orange hover:bg-handwerk-orange-hover text-white text-lg py-3"
                >
                  Jetzt kostenlos testen
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </form>
              
              <div className="flex items-center justify-center space-x-6 mt-6 text-sm text-gray-500">
                <div className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-efficiency-green mr-2" />
                  Keine Installation nötig
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-efficiency-green mr-2" />
                  Jederzeit kündbar
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Wrench className="h-8 w-8 text-handwerk-orange" />
                <span className="text-xl font-bold">RechnungsAI</span>
              </div>
              <p className="text-gray-400 mb-4">
                Die digitale Werkzeugkiste für Handwerker. 
                GOBD-konform und DSGVO-sicher.
              </p>
              <div className="flex space-x-4">
                <Badge className="bg-handwerk-orange">Made in Germany</Badge>
                <Badge className="bg-efficiency-green">GOBD-konform</Badge>
              </div>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Produkt</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Features</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Preise</a></li>
                <li><a href="#" className="hover:text-white transition-colors">GOBD-Integration</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Mobile App</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Support</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Hilfe-Center</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Kontakt</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Schulungen</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Status</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Kontakt</h3>
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
            <p className="text-gray-400">© 2025 RechnungsAI. Alle Rechte vorbehalten.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">Impressum</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">Datenschutz</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">AGB</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
