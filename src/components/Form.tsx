'use client';

import React, { useState } from 'react';
import SelectArea from './SelectArea';
import Toast from './Toast';
import '../app/globals.css';

const WEBHOOK_URL = 'https://r3suprimentos.app.n8n.cloud/webhook/482345e7-09d6-460d-b7ab-17a176b73f0f';
const WHATSAPP_NUM = '556299144217';

function formatTelefone(value: string) {
  value = value.replace(/\D/g, '');

  if (value.length > 11) value = value.slice(0, 11);

  if (value.length > 10) {
    value = value.replace(/(\d{2})(\d{5})(\d{4})/, '($1) $2-$3');
  } else if (value.length > 6) {
    value = value.replace(/(\d{2})(\d{4})(\d{0,4})/, '($1) $2-$3');
  } else if (value.length > 2) {
    value = value.replace(/(\d{2})(\d{0,5})/, '($1) $2');
  } else {
    value = value.replace(/(\d*)/, '($1');
  }

  return value;
}

export default function Form() {
  const [nome, setNome] = useState('');
  const [cargo, setCargo] = useState('');
  const [empresa, setEmpresa] = useState('');
  const [email, setEmail] = useState('');
  const [telefone, setTelefone] = useState('');
  const [area, setArea] = useState('');
  const [comment, setComment] = useState('');
  const [loading, setLoading] = useState(false);

  // Estados do toast
  const [toastShow, setToastShow] = useState(false);
  const [toastMessage, setToastMessage] = useState('');
  const [toastType, setToastType] = useState<'success' | 'error'>('success');

  const whatsappMsg = encodeURIComponent(
    `Olá, Meu nome é ${nome}, da empresa ${empresa}, e gostaria de confirmar minha presença no Workshop de Inovação & Eficiência em Hotelaria.`
  );

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    setLoading(true);

    const payload = {
      firstName: nome,
      lastName: " - WORKSHOP",
      cargo,
      empresa,
      email,
      phone: telefone,
      area,
      comment,
      dataEnvio: new Date().toISOString(),
    };

    try {
      await fetch(WEBHOOK_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      // Limpa os campos do form
      setNome('');
      setCargo('');
      setEmpresa('');
      setEmail('');
      setTelefone('');
      setArea('');
      setComment('');
      setLoading(false);

      // Mostra toast de sucesso
      setToastType('success');
      setToastMessage('Formulário enviado com sucesso! Aguarde nosso contato 😊');
      setToastShow(true);

      // Fecha o toast depois de 3.5s
      setTimeout(() => setToastShow(false), 3500);

      // Redireciona para o WhatsApp após o envio
      window.location.href = `https://wa.me/${WHATSAPP_NUM}?text=${whatsappMsg}`;

    } catch {
      setLoading(false);

      // Mostra toast de erro
      setToastType('error');
      setToastMessage('Erro ao enviar! Tente novamente.');
      setToastShow(true);
      setTimeout(() => setToastShow(false), 3500);
    }
  };

  return (
    <>
      <Toast
        show={toastShow}
        message={toastMessage}
        type={toastType}
        onClose={() => setToastShow(false)}
      />
      <form
        onSubmit={handleSubmit}
        className={
          'bg-white rounded-2xl shadow-lg p-6 sm:p-8 w-full max-w-xl space-y-5 mx-auto border border-[#263165]/20'
        }
      >
        <span className='text-[#263165] text-lg sm:text-xl md:text-xl font-bold font-[Montserrat] mb-2 block'>Preencha o formulário abaixo para confirmar sua participação:</span>
        <label className="flex flex-col">
          <span className="mb-1 text-sm sm:text-base font-medium text-[#263165]">Nome:<span className="text-red-500 ml-1">*</span></span>
          <input
            type="text"
            value={nome}
            onChange={e => setNome(e.target.value)}
            placeholder="Digite seu nome"
            required
            className="px-3 py-2 rounded-lg bg-[#f5f7fa] text-[#263165] border border-[#263165]/30 placeholder-[#263165]/60 text-sm sm:text-base outline-none focus:ring-2 focus:ring-[#009FE3] transition font-[Montserrat]"
          />
        </label>
        <label className="flex flex-col">
          <span className="mb-1 text-sm sm:text-base font-medium text-[#263165]">Empresa:<span className="text-red-500 ml-1">*</span></span>
          <input
            type="text"
            value={empresa}
            onChange={e => setEmpresa(e.target.value)}
            placeholder="Digite o nome da empresa"
            required
            className="px-3 py-2 rounded-lg bg-[#f5f7fa] text-[#263165] border border-[#263165]/30 placeholder-[#263165]/60 text-sm sm:text-base outline-none focus:ring-2 focus:ring-[#009FE3] transition font-[Montserrat]"
          />
        </label>
        <label className="flex flex-col">
          <span className="mb-1 text-sm sm:text-base font-medium text-[#263165]">Cargo/Função:</span>
          <input
            type="text"
            value={cargo}
            onChange={e => setCargo(e.target.value)}
            placeholder="Digite seu cargo/função"
            className="px-3 py-2 rounded-lg bg-[#f5f7fa] text-[#263165] border border-[#263165]/30 placeholder-[#263165]/60 text-sm sm:text-base outline-none focus:ring-2 focus:ring-[#009FE3] transition font-[Montserrat]"
          />
        </label>
        <label className="flex flex-col">
          <span className="mb-1 text-sm sm:text-base font-medium text-[#263165]">E-mail:<span className="text-red-500 ml-1">*</span></span>
          <input
            type="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            placeholder="Digite seu e-mail"
            required
            className="px-3 py-2 rounded-lg bg-[#f5f7fa] text-[#263165] border border-[#263165]/30 placeholder-[#263165]/60 text-sm sm:text-base outline-none focus:ring-2 focus:ring-[#009FE3] transition font-[Montserrat]"
          />
        </label>
        <label className="flex flex-col">
          <span className="mb-1 text-sm sm:text-base font-medium text-[#263165]">Telefone (Whatsapp):<span className="text-red-500 ml-1">*</span></span>
          <input
            type="tel"
            value={telefone}
            onChange={e => setTelefone(formatTelefone(e.target.value))}
            placeholder="Digite seu telefone"
            required
            maxLength={15}
            className="px-3 py-2 rounded-lg bg-[#f5f7fa] text-[#263165] border border-[#263165]/30 placeholder-[#263165]/60 text-sm sm:text-base outline-none focus:ring-2 focus:ring-[#009FE3] transition font-[Montserrat]"
          />
        </label>
        <SelectArea area={area} setArea={setArea} />
        <label className="flex flex-col">
          <span className="mb-1 text-sm sm:text-base font-medium text-[#263165]">Comentário (opcional):</span>
          <textarea
            value={comment}
            onChange={e => setComment(e.target.value)}
            rows={2}
            placeholder="Deixe uma observação ou sugestão"
            className="px-3 py-2 rounded-lg bg-[#f5f7fa] text-[#263165] border border-[#263165]/30 placeholder-[#263165]/60 text-sm sm:text-base outline-none focus:ring-2 focus:ring-[#009FE3] transition resize-none font-[Montserrat]"
          />
        </label>
        <button
          type="submit"
          disabled={loading}
          className="w-full bg-[#263165] hover:bg-[#009FE3] text-white font-semibold py-3 rounded-lg border-none transition-colors duration-200 text-base font-[Montserrat] cursor-pointer shadow-md"
        >
          {loading ? 'Confirmando...' : 'Confirmar Participação!'}
        </button>
      </form>
    </>
  );
}
