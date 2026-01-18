import { Shield, Users, Award } from "lucide-react";

export function Features() {
    return (
        <section className="py-24 bg-background relative z-10 -mt-8 pb-32">
            <div className="container-custom">
                <div className="grid md:grid-cols-3 gap-8">
                    <div className="bg-card shadow-lg rounded-xl p-8 border border-border hover:border-gold/50 transition-all duration-300 text-center group">
                        <div className="flex justify-center mb-6">
                            <div className="bg-primary/5 p-4 rounded-full group-hover:bg-gold/10 transition-colors duration-300">
                                <Shield className="h-10 w-10 text-gold transition-transform duration-300 group-hover:scale-110" />
                            </div>
                        </div>
                        <h3 className="text-xl font-semibold mb-3 font-heading text-foreground">Proteção dos Seus Direitos</h3>
                        <p className="text-muted-foreground font-light leading-relaxed">
                            Atuação preventiva e contenciosa para sua segurança.
                        </p>
                    </div>

                    <div className="bg-card shadow-lg rounded-xl p-8 border border-border hover:border-gold/50 transition-all duration-300 text-center group">
                        <div className="flex justify-center mb-6">
                            <div className="bg-primary/5 p-4 rounded-full group-hover:bg-gold/10 transition-colors duration-300">
                                <Users className="h-10 w-10 text-gold transition-transform duration-300 group-hover:scale-110" />
                            </div>
                        </div>
                        <h3 className="text-xl font-semibold mb-3 font-heading text-foreground">Atendimento Humanizado</h3>
                        <p className="text-muted-foreground font-light leading-relaxed">
                            Atenção personalizada e comunicação clara.
                        </p>
                    </div>

                    <div className="bg-card shadow-lg rounded-xl p-8 border border-border hover:border-gold/50 transition-all duration-300 text-center group">
                        <div className="flex justify-center mb-6">
                            <div className="bg-primary/5 p-4 rounded-full group-hover:bg-gold/10 transition-colors duration-300">
                                <Award className="h-10 w-10 text-gold transition-transform duration-300 group-hover:scale-110" />
                            </div>
                        </div>
                        <h3 className="text-xl font-semibold mb-3 font-heading text-foreground">Ética e Transparência</h3>
                        <p className="text-muted-foreground font-light leading-relaxed">
                            Integridade e informação em todas as etapas.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
