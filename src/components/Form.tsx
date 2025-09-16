'use client';


import React, { useState } from 'react';
import Toast from './Toast';
import '../app/globals.css';
import { supabase } from '../lib/supabaseClient';

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
  const [telefone, setTelefone] = useState('');
  const [empresa, setEmpresa] = useState('');
  const [cnpj, setCnpj] = useState('');
  const [cargo, setCargo] = useState('');
  const [email, setEmail] = useState('');
  const [produtos, setProdutos] = useState('');
  const [loading, setLoading] = useState(false);

  // Estados do toast
  const [toastShow, setToastShow] = useState(false);
  const [toastMessage, setToastMessage] = useState('');
  const [toastType, setToastType] = useState<'success' | 'error'>('success');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    setLoading(true);

    // Monta o objeto para o Supabase
    const lead = {
      nome: nome.trim(),
      telefone,
      empresa,
      cnpj: cnpj ? cnpj.trim() : null,
      cargo,
      email,
      interesses: produtos,
      source: 'landing-page', // ou outro valor se quiser customizar
    };

    try {
      const { error } = await supabase.from('leads').insert([lead]);

      if (error) throw error;

      // Limpa os campos do form
      setNome('');
      setTelefone('');
      setEmpresa('');
      setCnpj('');
      setCargo('');
      setEmail('');
      setProdutos('');
      setLoading(false);

      // Mostra toast de sucesso
      setToastType('success');
      setToastMessage('Formulário enviado com sucesso! Aguarde nosso contato 😊');
      setToastShow(true);
      setTimeout(() => setToastShow(false), 3500);
    } catch (err: any) {
      setLoading(false);
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
      <div className="px-4 sm:px-6 md:px-8">
        <form
          onSubmit={handleSubmit}
          className="bg-white rounded-xl sm:rounded-2xl shadow-lg p-4 sm:p-6 md:p-8 w-full max-w-lg mx-auto space-y-4 sm:space-y-5 border border-[#263165]/20"
        >
          <h3 className="text-[#263165] text-lg sm:text-xl md:text-2xl font-bold font-[Montserrat] mb-3 sm:mb-4 text-center leading-tight">
            Preencha o formulário abaixo:
          </h3>
          <label className="flex flex-col space-y-2">
            <span className="text-xs sm:text-sm md:text-base font-medium text-[#263165]">
              Nome:<span className="text-red-500 ml-1">*</span>
            </span>
            <input
              type="text"
              value={nome}
              onChange={e => setNome(e.target.value)}
              placeholder="Digite seu nome"
              required
              className="px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg bg-[#f5f7fa] text-[#263165] border border-[#263165]/30 placeholder-[#263165]/60 text-sm sm:text-base outline-none focus:ring-2 focus:ring-[#009FE3] transition font-[Montserrat] w-full"
            />
          </label>
          <label className="flex flex-col space-y-2">
            <span className="text-xs sm:text-sm md:text-base font-medium text-[#263165]">
              Telefone:<span className="text-red-500 ml-1">*</span>
            </span>
            <input
              type="tel"
              value={telefone}
              onChange={e => setTelefone(formatTelefone(e.target.value))}
              placeholder="Digite seu telefone"
              required
              maxLength={15}
              className="px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg bg-[#f5f7fa] text-[#263165] border border-[#263165]/30 placeholder-[#263165]/60 text-sm sm:text-base outline-none focus:ring-2 focus:ring-[#009FE3] transition font-[Montserrat] w-full"
            />
          </label>
          <label className="flex flex-col space-y-2">
            <span className="text-xs sm:text-sm md:text-base font-medium text-[#263165]">
              Empresa:<span className="text-red-500 ml-1">*</span>
            </span>
            <input
              type="text"
              value={empresa}
              onChange={e => setEmpresa(e.target.value)}
              placeholder="Digite o nome da empresa"
              required
              className="px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg bg-[#f5f7fa] text-[#263165] border border-[#263165]/30 placeholder-[#263165]/60 text-sm sm:text-base outline-none focus:ring-2 focus:ring-[#009FE3] transition font-[Montserrat] w-full"
            />
          </label>
          
          <label className="flex flex-col space-y-2">
            <span className="text-xs sm:text-sm md:text-base font-medium text-[#263165]">
              CNPJ <span className="text-[#263165]/60 font-normal">(opcional)</span>
            </span>
            <input
              type="text"
              value={cnpj}
              onChange={e => setCnpj(e.target.value)}
              placeholder="Digite o CNPJ da empresa (se tiver)"
              className="px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg bg-[#f5f7fa] text-[#263165] border border-[#263165]/30 placeholder-[#263165]/60 text-sm sm:text-base outline-none focus:ring-2 focus:ring-[#009FE3] transition font-[Montserrat] w-full"
            />
          </label>
          
          <label className="flex flex-col space-y-2">
            <span className="text-xs sm:text-sm md:text-base font-medium text-[#263165]">
              Cargo:<span className="text-red-500 ml-1">*</span>
            </span>
            <input
              type="text"
              value={cargo}
              onChange={e => setCargo(e.target.value)}
              placeholder="Digite seu cargo"
              required
              className="px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg bg-[#f5f7fa] text-[#263165] border border-[#263165]/30 placeholder-[#263165]/60 text-sm sm:text-base outline-none focus:ring-2 focus:ring-[#009FE3] transition font-[Montserrat] w-full"
            />
          </label>
          
          <label className="flex flex-col space-y-2">
            <span className="text-xs sm:text-sm md:text-base font-medium text-[#263165]">
              E-mail:<span className="text-red-500 ml-1">*</span>
            </span>
            <input
              type="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              placeholder="Digite seu e-mail"
              required
              className="px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg bg-[#f5f7fa] text-[#263165] border border-[#263165]/30 placeholder-[#263165]/60 text-sm sm:text-base outline-none focus:ring-2 focus:ring-[#009FE3] transition font-[Montserrat] w-full"
            />
          </label>
          
          <label className="flex flex-col space-y-2">
            <span className="text-xs sm:text-sm md:text-base font-medium text-[#263165]">
              Produtos e/ou marca de interesse:<span className="text-red-500 ml-1">*</span>
            </span>
            <input
              type="text"
              value={produtos}
              onChange={e => setProdutos(e.target.value)}
              placeholder="Ex: Produtos de limpeza, equipamentos..."
              required
              className="px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg bg-[#f5f7fa] text-[#263165] border border-[#263165]/30 placeholder-[#263165]/60 text-sm sm:text-base outline-none focus:ring-2 focus:ring-[#009FE3] transition font-[Montserrat] w-full"
            />
          </label>
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-[#263165] hover:bg-[#009FE3] text-white font-semibold py-3 sm:py-4 rounded-lg border-none transition-colors duration-200 text-sm sm:text-base font-[Montserrat] cursor-pointer shadow-md disabled:opacity-70"
          >
            {loading ? 'Confirmando...' : 'Confirmar Cadastro!'}
          </button>
        </form>
      </div>
    </>
  );
}
